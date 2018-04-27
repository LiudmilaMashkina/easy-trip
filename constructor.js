const searchString = window.location.search.slice(1).split('&').map(ele => {
    const [key, value] = ele.split('=')
    return {
        [key]: value
    }
}).reduce((acc, ele) => {
    return { ...acc,
        ...ele
    }
}, {})


loadTrip(searchString.id)

function loadTrip(trip_id) {
    getOneTrip(trip_id).then(function(locations) {
        const result = locations.filter((location, index) => {
            if (index === 0 || index % 2 > 0)
                return location
        })
        const desk = document.querySelector('#desk')
        renderTrip(result, desk)
        console.log(result)
    })
}

function renderTrip(arr, parent) {
    const div = document.createElement('div')
    div.classList.add('path-container', 'centered-desk')
    arr.forEach((element, index) => {
        const location = document.createElement('span')
        location.innerHTML = element
        div.appendChild(location)
        if (index === 0 || index === arr.length - 1) {
            location.style.color = "#2E8B57"
            location.style.fontWeight = "bold"
        }
    });

    parent.appendChild(div)
}
// const trip_id = searchString.id
// loadTrip(trip_id)