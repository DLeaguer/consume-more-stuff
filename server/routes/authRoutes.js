const express = require('express');
const route = express.Router();
const Users = require('../db/models/users.js')

route.post('/register', (req, res) => {
  console.log('authRoutes.js POST/register req.body', req.body)
  const {email, password} = req.body;
  console.log('email', email)
  console.log('password', password)
  console.log('req.body.email', req.body.email)
  Users
    .forge({email, password})
    .save()
    .then( result => {
      if (result) {
        res.send('authRoutes.js POST/register NEW USER MADE!!!')
      }
      else {
        res.send('ERROR MAKING USER authRoutes.js POST/register ')
      }
    })
    .catch( err => {
      console.log('catch ERROR authRoutes.js POST/register', err)
      res.send(err)
    })
})

route.post('/login', (req, res) => {

})

route.get('/login', (req, res) => {

})

route.post('/logout', (req, res) => {

})

route.get('/protected', (req, res) => {
  res.send('authRoutes.js GET/protected')
})

module.exports = route