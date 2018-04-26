const TABLE_NAME = 'trip_order'

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex(TABLE_NAME).del()
    .then(function () {
      // Inserts seed entries
      return knex(TABLE_NAME).insert([
        {id: 1, trip_id: 1, path_id: 1, order: 1},
        {id: 2, trip_id: 1, path_id: 2, order: 2},
        {id: 3, trip_id: 1, path_id: 3, order: 3},
        {id: 4, trip_id: 1, path_id: 4, order: 4},
        {id: 5, trip_id: 1, path_id: 5, order: 5}
      ]);
    })
    .then(() => {
      // reset sequence
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
};