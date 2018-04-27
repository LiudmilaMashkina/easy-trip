function onload() {
    createNavButtons()
    createTripsList()
}

function getAllTrips() {
    const trips = []
    return request('/trips')
    .then(function(response){
        response.data.data.forEach(a => {
            const lastIndex = a.length - 1
            const startName = a[0].location_a.location_name
            const lastName = a[lastIndex].location_b.location_name
            const name = `${startName} - ${lastName}`
            const id = a[0].trip_id
            console.log(id)
            trips.push({name, id})
        })
        //console.log(trips)
        console.log(response.data.data[0][0].trip_id)
        return trips
    }) // <-- TODO: add catch
}

function loadConstructor(trip_id) {
    window.location = '/trip_constructor.html?id='+trip_id
    console.log(trip_id)
    //document.querySelector('#test').innerHTML = trip_id
}

function createTripsList() {
    const tripList = document.querySelector('#trips-list');
    getAllTrips().then(function(list) {
        list.forEach(function(item) {
            const div = document.createElement('div')
            div.classList.add('trip-node', 'centered')
            div.addEventListener("click", function() {
                loadConstructor(item.id)
            })
            const span = document.createElement('span')
            span.innerHTML = item.name
            div.appendChild(span)
            const hr = document.createElement('hr')
            tripList.appendChild(div)
            tripList.appendChild(hr)
        })
        const divBtn = document.createElement('div')
        divBtn.classList.add('centered')
        divBtn.style.height = "100px"
        tripList.appendChild(divBtn)

        const newTrip = document.createElement('button')
        newTrip.innerHTML = "New trip"
        newTrip.addEventListener("click", openConstructorPage)
        divBtn.appendChild(newTrip)
    })
}
