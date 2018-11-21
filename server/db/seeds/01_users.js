
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bobbles').del()
  .then(function() {
    return knex('users').del()
  })
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        email: 'jeff@email.com',
        password: 'p1'
      },
      {
        email: 'jason@email.com',
        password: 'p2'
      },
      {
        email: 'carl@email.com',
        password: 'p3'
      }
    ]);
  });
};