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
  const { email, password } = req.body;
  Users
    .where( { email: email})
    .fetch()
    .then( user => {
      if (password === user.attributes.password) {
        req.session.isLoggedIn = true
        res.send('authRoutes.js POST/login SUCCESSFUL!!')
      }
      else {
        res.send('WRONG EMAIL OR PASSWORD!!!')
      }
    })
    .catch( err => {
      console.log('err', err)
      // logger.error(err)
      res.send(err)
    })
})

route.get('/login', (req, res) => {

})

route.post('/logout', (req, res) => {
  req.session.destroy()
  res.send('LOGGED OUT!!')
})

route.get('/protected', (req, res) => {
  if (req.session.isLoggedIn) {
    res.send('AUTHORIZED authRoutes.js GET/protected Successful')
  }
  else {
    res.send('NOT AUTHORIZED authRoutes.js GET/protected Not Successful')
  }
})

module.exports = route