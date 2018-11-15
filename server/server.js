const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
// const path = require('path')
const bodyParser = require("body-parser");
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const Users = require('./db/models/users.js');
const Bobbles = require('./db/models/bobbles.js');
const AuthRoutes = require('./routes/authRoutes.js')

//Routes
// const users = require('./routes/users.js')
// const bobbles = require('./routes/bobbles.js')

app.use(session({
  store: new RedisStore({url: 'redis://redis-session-store:6379', logErrors: true}),
  secret: 'pancake',
  resave: false,
  saveUninitialized: true
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../build')))

app.use('/auth', AuthRoutes)


app.get('/', (req, res) => {
  if (!req.session.viewCount) {
    req.session.viewCount = 1
  }
  else {
    req.session.viewCount++
  }
  console.log('req.session', req.session)
  // res.sendFile('../public/index.html')
  res.send('Hello from server.js get"/"')
})

app.get('/users', (req, res) => {
  Users
  .fetchAll()
  .then( items => {
    res.json(items.serialize())
  }) 
  .catch( err => {
    console.log('err server.js GET/users', err)
    res.json(err)
  })
})

app.get('/bobbles', (req, res) => {
  console.log('server get bobbles fired')
  Bobbles
  .fetchAll()
  .then( items => {
    res.json(items.serialize())
  })
  .catch( err => {
    console.log('err server.js GET/bobbles', err)
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
      res.json(err)
    })
  })
})

app.post('/newBobble', (req, res) => {
  console.log('new bobble fired', req.body)
  const bobble = req.body
  const newBobble = {
    title: bobble.title,
    description: bobble.description,
    price: bobble.price,
    image: bobble.image,
    condition: bobble.condition,
    category: bobble.category,
    // status: bobble.status,
    // user_id: bobble.user_id,
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
      res.json(err)
    })
  })
})

app.delete('/deleteUser/:id', (req, res) => {
  let { id } = req.params;
  console.log('req.params id', id)
  Users
  .where({ id })
  .destroy()
  .then(() => {
    return Users
    .fetchAll()
    .then( result => {
      res.json(result.serialize())
    })
    .catch(err => {
      console.log('err', err)
      res.json(err)
    })
  })
})

app.delete('/deleteBobble/:id', (req, res) => {
  let { id } = req.params;
  console.log('req.params id', id)
  Bobbles
  .where({ id })
  .destroy()
  .then(() => {
    return Bobbles
    .fetchAll()
    .then( result => {
      res.json(result.serialize())
    })
    .catch(err => {
      console.log('err', err)
      res.json(err)
    })
  })
})

app.put("/editUser/:id", (req, res) => {
  const updatedUser = {
    email: req.body.email,
    password: req.body.password,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at
  }
  Users
    .where('id', req.params.id)
    .fetch()
    .then(results => {
      console.log("\nBackend - PUT results:", results);
      results.save(updatedUser);
      return Users.fetchAll()
    })
    .then(users => {
      res.json(users.serialize());
    })
    .catch(err => {
      console.log("Backend PUT didn't work");
      res.json("FAILED");
    })
})


app.put("/editBobble/:id", (req, res) => {
  const updatedBobble = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    image: req.body.image,
    condition: req.body.condition,
    category: req.body.category,
    status: req.body.status,
    user_id: req.body.user_id,
    created_at: req.body.created_at,
    updated_at: req.body.updated_at
  }
  Bobbles
    .where('id', req.params.id)
    .fetch()
    .then(results => {
      console.log("\nBackend - PUT results:", results);
      results.save(updatedBobble);
      return Bobbles.fetchAll()
    })
    .then(bobbles => {
      res.json(bobbles.serialize());
    })
    .catch(err => {
      console.log("Backend PUT didn't work");
      res.json("FAILED");
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
