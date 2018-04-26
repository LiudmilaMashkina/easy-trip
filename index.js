function openConstructorPage() {
    'use strict';

    request('/auth/validate_token')
    .then(function(response){
    window.location = '/trip_constructor.html'

    })
    .catch(function(error){
        showSignInForm()
    })
}


function getOneTrip(index) { /// <-- should returning all trip locations
    return request(`/trips/${index}`)
    .then(function(response){
        const lastIndex = response.data.data.length - 1
        const startName = response.data.data[0].location_a.location_name
        const lastName = response.data.data[lastIndex].location_b.location_name
        return `${startName} - ${lastName}`
    }) // <-- TODO: add catch
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
            trips.push({name, id})
        })
        console.log(trips)
        console.log(response.data.data.trip_id)
        return trips
    }) // <-- TODO: add catch
}

function createTripNode(index, parent) {
    const div = document.createElement('div')
    div.classList.add('trip-node')
    const span = document.createElement('span')
    getOneTrip(1).then(function(names) {
        span.innerHTML = names
        div.appendChild(span)
        parent.appendChild(div)
    })
}

function loadConstructor(trip_id) {
    window.location = '/trip_constructor.html'
    console.log(trip_id)
    //document.querySelector('#test').innerHTML = trip_id
}

function createTripsList() {
    const tripList = document.querySelector('#trips-list');
    getAllTrips().then(function(list) {
        list.forEach(function(item) {
            const div = document.createElement('div')
            div.classList.add('trip-node')
            div.addEventListener("click", function() {
                loadConstructor(item.id)
            })
            const span = document.createElement('span')
            span.innerHTML = item.name
            div.appendChild(span)
            tripList.appendChild(div)
        })
    })
}

function openMainPage() {
    window.location = '/index.html'
}

function openMyTrips() {
    'use strict';
    request('/auth/validate_token')
    .then(function(response){
        window.location = '/trips_list.html'
    })
    .catch(function(error){
        showSignInForm()
    })
}

function showSignInForm() {
    document.querySelector('#main_button').remove();
    createSignInForm();
}

function createSignInForm() {
    let form = document.querySelector('#sign_in_form');
    form.innerHTML = signInForm;
    form.style.visibility = "visible";
    form.style.width = "50%";
    form.style.height = "300px";


    document.querySelector('#sign_in_form').addEventListener('submit', function(event){
        event.preventDefault()
    
        const username = event.target.username.value
        const password = event.target.password.value
    
        request('/auth/token', 'post', { username , password })
        .then(function(response){
          document.querySelector('#error').classList.add('hide-auth-error')
          localStorage.setItem('token', response.data.token)
          window.location = '/trip_constructor.html'
        })
        .catch(function(error){
          document.querySelector('#error').classList.remove('hide-auth-error')
        })
      })
}

function logOut() {
    localStorage.removeItem('token')
    window.location = '/index.html'
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

//Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
  }
}

document.querySelector('.navbar').innerHTML = navBar