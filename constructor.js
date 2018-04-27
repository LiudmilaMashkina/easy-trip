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
        document.querySelector('#test').innerHTML = result
        console.log(result)
    })
}
// const trip_id = searchString.id
// loadTrip(trip_id)