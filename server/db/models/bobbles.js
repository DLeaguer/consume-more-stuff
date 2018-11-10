const bookshelf = require('./bookshelf')

const Bobbles = bookshelf.Model.extend({
  tableName: 'bobbles',
  idAtrribute: 'id',
  hasTimestamps: true
})

module.exports = Bobbles