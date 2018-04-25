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