
exports.seed = function(knex, Promise) {

  return knex('trip_order').del()
  .then(function () {
    return knex('path').del()
  })
  .then (function () {
    return knex('locations').del()
  })
  .then(function () {
    return knex('trips').del()
  })
  .then(function(){
    return knex('users').del()
  })
  .then(function(){
    return knex('users')
    .insert([
      { username: 'yoda', password: '$2a$10$n8UqyqjHuIsede7Krp1w9OOCJENVfaRS3OlgTjEevSxvhjp/axIaC' },
      { username: 'luda', password: '$2a$10$b5ud1OaOFhjDhfpxiKno4eKcpOumNvMrGzmdx0HmHsGUC8Y87wyX.' },
      { username: 'dan', password: '$2a$10$WgH2w5hSRAriC/MZ4AZmWufPHMGa24NanRzlKNPG2X9P6UqMfUg4m' },
    ])
  })
};         
