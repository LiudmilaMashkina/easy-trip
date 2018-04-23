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

    // document.querySelector('.centered').addEventListener('submit', function(event){
    //     event.preventDefault()
    
    //     const username = event.target.username.value
    //     const password = event.target.password.value
    
    //     request('/auth/token', 'post', { username , password })
    //     .then(function(response){
    //       document.querySelector('#error').classList.add('hide-auth-error')
    //       localStorage.setItem('token', response.data.token)
    //       window.location = '/protected.html'
    //     })
    //     .catch(function(error){
    //       document.querySelector('#error').classList.remove('hide-auth-error')
    //     })
    //   })
}


document.querySelector('.navbar').innerHTML = navBar