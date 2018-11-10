
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bobbles').del()
  .then(function () {
    // Inserts seed entries
    return knex('bobbles').insert([
      {
        title: "President Obama",
        description: "Prez Obama bobble head",
        price: 15,
        image: "https://papundits.files.wordpress.com/2011/08/obama-bobblehead.gif",
        condition: "Excellent",
        category: "Presidents",
        status: true,
        user_id: 2
      },
      {
        title: "Michael Jackson",
        description: "Michael Jackson bobble head",
        price: 10,
        image: "http://blog.swagbucks.com/wp-content/uploads/2012/02/71o-800ojqL._AA1500_.jpg",
        condition: "Good",
        category: "Singers",
        status: true,
        user_id: 3,
      },
      {
        title: "Angelina Jolie",
        description: "Maleficent bobble head",
        price: 12,
        image: "https://experiencethemistress.com/wp-content/uploads/2016/06/2014-Funko-Maleficent-Movie-Wacky-Wobbler-Bobble-Head-Vinyl-Figure-Unreleased-Prototype-002.jpg",
        condition: "Poor",
        category: "Actors",
        status: true,
        user_id: 1,
      }
    ]);
  });
};