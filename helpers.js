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
