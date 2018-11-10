const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
// const path = require('path')
const bodyParser = require("body-parser");
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const Users = require('./db/models/users.js')
const Bobbles = require('./db/models/bobbles.js')

//Routes
// const users = require('./routes/users.js')
// const bobbles = require('./routes/bobbles.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../build')))

app.get('/users', (req, res) => {
  Users
  .fetchAll()
  .then( items => {
    res.json(items.serialize())
  }) 
  .catch( err => {
    console.log('error', err)
  })
})

app.get('/bobbles', (req, res) => {
  Bobbles
  .fetchAll()
  .then( items => {
    res.json(items.serialize())
  })
  .catch( err => {
    res.json(err)
  })
})

app.post('/newUser', (req, res) => {
  const user = req.body
  const newUser = {
    email: user.email,
    password: user.password,
  }
  Users
  .forge(newUser)
  .save()
  .then( () => {
    return Users
    .fetchAll()
    .then( result => {
      res.json(result.serialize())
    })
    .catch( err => {
      console.log('err server.js POST/newUser', err)
    })
  })
})

app.post('/newBobble', (req, res) => {
  const bobble = req.body
  const newBobble = {
    title: bobble.title,
    description: bobble.description,
    price: bobble.price,
    image: bobble.image,
    condition: bobble.condition,
    category: bobble.category,
    status: bobble.status,
    user_id: bobble.user_id,
  }
  Bobbles
  .forge(newBobble)
  .save()
  .then( () => {
    return Bobbles
    .fetchAll()
    .then( result => {
      res.json(result.serialize())
    })
    .catch( err => {
      console.log('err server.js POST/newBobble', err)
    })
  })
})
//Routes middleware
// app.use('/', users);
// app.use('/', bobbles);

//ERROR
app.get('*', (req, res) => {
  res.json('404 User attempted to get a route/uri that does not exist')
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})
