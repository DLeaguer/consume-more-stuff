// const express = require('express');
// const app = express()
// const PORT = process.env.EXPRESS_CONTAINER_PORT || 9999
// const path = require('path')
// const bodyParser = require("body-parser");
// const session = require('express-session');
// const RedisStore = require('connect-redis')(session);
// const route = express.Router();
// const Users = require('../db/models/users.js')

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '../build')))

// // route.get('/', (req, res) => {
// //   // res.sendFile('../public/index.html')
// //   res.send('Hello from routes/users.js')
// // })

// // route.get('/', (req, res) => {
// //   Users
// //   .fetchAll()
// //   .then( items => {
// //     console.log('is it fetching all users', items)
// //     res.json(items.serialize())
// //   }) 
// //   .catch( err => {
// //     console.log('error', err)
// //   })
// // })

// module.exports = route;