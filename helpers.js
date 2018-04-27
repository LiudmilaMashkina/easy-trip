function request(path, method = 'get', body = null) {
  let bearerToken = ''
  const token = localStorage.getItem('token')

  if(token){
    bearerToken = `Bearer ${token}`
  }

  return axios(`http://localhost:3000${path}`, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': bearerToken
    },
    data: body
  })
}

function logOut() {
  localStorage.removeItem('token')
  window.location = '/index.html'
}

function createNavButtons() {
  document.querySelector('.navbar').innerHTML = navBar

  const nav = document.querySelector('#nav-buttons');

  createUserButton(nav)
}

function createUserButton(parent) {
  request('/auth/validate_token')
  .then(function(response){
      console.log(':)')
      let btn = document.querySelector('#userB')
      btn.innerHTML = userButton
  })
  .catch(function(error){
      console.log(':(')
      let btn = document.querySelector('#userB')
      btn.innerHTML = logInButton
  })
}

function getOneTrip(index) {
  const locations = [];
  return request(`/trips/${index}`)
  .then(function(response){
      response.data.data.forEach( function(item) {
          locations.push(item.location_a.location_name)
          locations.push(item.location_b.location_name)
      })
      return locations;
  }) // <-- TODO: add catch
}
