
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
  .then(function () {
    // Inserts seed entries
    return knex('users').insert([
      {
        id: 1,
        email: 'jeff@email.com',
        password: 'p1'
      },
      {
        id: 2,
        email: 'jason@email.com',
        password: 'p2'
      },
      {
        id: 3,
        email: 'carl@email.com',
        password: 'p3'
      }
    ]);
  });
};