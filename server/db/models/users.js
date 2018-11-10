const bookshelf = require('./bookshelf')

const Users = bookshelf.Model.extend({
  tableName: 'users',
  idAtrribute: 'id',
  hasTimestamps: true
})

module.exports = Users