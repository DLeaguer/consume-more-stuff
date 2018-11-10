const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
const path = require('path')
const bodyParser = require("body-parser");
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

//Routes
const users = require('./routes/users.js')
const bobbles = require('./routes/bobbles.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build')))

app.get('/', (req, res) => {
  // res.sendFile('../public/index.html')
  res.send('Hello from server.js')
})

//Routes middleware
app.use('/users', users);
app.use('/bobbles', bobbles);

//ERROR
app.get('*', (req, res) => {
  res.json('404 User attempted to get a route/uri that does not exist')
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})
