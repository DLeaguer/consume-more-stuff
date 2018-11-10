const express = require('express');
const app = express()
const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
const path = require('path')
const bodyParser = require("body-parser");
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const route = express.Router();
const Users = require('../db/models/users.js')

route.get('/', (req, res) => {
  // res.sendFile('../public/index.html')
  res.send('Hello from routes/bobbles.js')
})

route.get('/', (req, res) => {
  Users
    .fetchAll()
    .then(results => {
      console.log("user results:", results.rows);
      res.json(results.rows[0])
    })
    .catch(err => {
      console.log('User not found', err);
    })
});

module.exports = route;