const express = require('express');
const route = express.Router();
const Users = require('../db/models/users.js')
// eslint-disable-next-line to the line before
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');


passport.serializeUser( (user, done) => {
  console.log('serializeUser', user)
  done(null, {
    email: user.email
  })
})

passport.deserializeUser( (user, done) => {
  console.log('deserializing User', user)
  Users
    .where({email: user.email})
    .fetch()
    .then( user => {
      user = user.toJSON();
      console.log('user in deserialize user', user)
      done(null, user)
    })
    .catch( err => {
      console.log('err', err)
    })
})

passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
  console.log('local is being called')
  Users
    .where({email})
    .fetch()
    .then( user => {
      console.log('user in local strategy', user)
      user = user.toJSON();
      // if (user.password === password) {
        //   done(null, user )
        // } else {
          //   done(null, false)
          // }
          console.log('authRoutes.js passport.use login user.ToJSON', user)
          bcrypt.compare(password, user.password)
          .then( res => {
            console.log('authRoutes.js passport.use login after bcrypt!!!\n', res)
            
            if (res) {
              console.log('authRoutes.js passport.use login after success!!!!\n')
              done(null, user)
          } else {
            console.log('authRoutes.js passport.use login after failure!!!\n')
            done(null, false)
          }
        })
    })
    .catch( err => {
      done(null, false)
    })
}))


const SALT_ROUND = 12

route.post('/register', (req, res) => {

  const { email, password } = req.body;

  bcrypt.genSalt(12)
    .then( salt => {
      console.log('salt', salt)
      return bcrypt.hash(password, salt)
    })
    .then( hash => {
      console.log('hash', hash)
      return Users 
                .forge({email, password: hash})
                .save()
    })
    .then( user => {
      user = user.toJSON()
      res.json(user) // Never send the entire user object back to client! It has their password!
      // res.sendStatus(200)
      // res.redirect('/api/auth/secret')
    })
    .catch( err => {
      console.log('err', err)
      res.json(err)
      // res.sendStatus(500)
    })
})

route.post('/login', passport.authenticate('local', {failureRedirect: '/'}), (req, res) => {
  console.log('authRoutes.js POST/login!!!')
  // grab the user on record
  // compare req.body.password to password on record

  res.send('YAY IM IN!!!!')
})

route.get('/logout', (req, res) => {
  console.log('auth logout!!!')
  req.logout()
  console.log('auth logout, after logout!!')
  res.redirect('/')
  console.log('auth logout, after redirect!!')
})

// route.get('/protected', isAuthenticated, (req, res) => { 
//   console.log('protected route fired')
//   res.send('YOU HAVE FOUND DA SEKRET')
// })

// function isAuthenticated(req, res, done) {
//   if (req.isAuthenticated()) {
//     console.log('authRoutes.js isAuthenticated succeeded')
//     done()
//   } else {
//     console.log('authRoutes.js isAuthenticated failed')
//     res.redirect('/')
//   }
// }

module.exports = route


// BASIC AUTH WITHOUT BCRYPT/PASSPORT

// upon successful authorized 

// route.post('/register', (req, res) => {
//   console.log('authRoutes.js POST/register req.body', req.body)
//   const {email, password} = req.body;
//   console.log('email', email)
//   console.log('password', password)
//   console.log('req.body.email', req.body.email)
//   Users
//     .forge({email, password})
//     .save()
//     .then( result => {
//       if (result) {
//         res.send('authRoutes.js POST/register NEW USER MADE!!!')
//       }
//       else {
//         res.send('ERROR MAKING USER authRoutes.js POST/register ')
//       }
//     })
//     .catch( err => {
//       console.log('catch ERROR authRoutes.js POST/register', err)
//       res.send(err)
//     })
// })

// route.post('/login', (req, res) => {
//   const { email, password } = req.body;
//   Users
//     .where( { email: email})
//     .fetch()
//     .then( user => {
//       console.log('login user info from db/routes/authRoutes.js\n', user)
//       if (password === user.attributes.password) {
//         req.session.isLoggedIn = true
//         // res.send('authRoutes.js POST/login SUCCESSFUL!!', )
//         res.json(user)
//       }
//       else {
//         res.send('WRONG EMAIL OR PASSWORD!!!')
//       }
//       // bcrypt.compare(password, user.attributes.password)
//       //   .then( result => {
//       //     if (result) {
//       //       res.send('SUCCESS authRoutes.js POST/login bcrypt')
//       //     }
//       //     else {
//       //       res.redirect('/')
//       //     }
//       //   })
//     })
//     .catch( err => {
//       console.log('err', err)
//       // logger.error(err)
//       res.send(err)
//     })
// })

// route.get('/login', (req, res) => {

// })

// route.post('/logout', (req, res) => {
//   req.session.destroy()
//   res.send('LOGGED OUT!!')
// })

// route.get('/protected', (req, res) => {
//   if (req.session.isLoggedIn) {
//     res.send('AUTHORIZED authRoutes.js GET/protected Successful')
//   }
//   else {
//     res.send('NOT AUTHORIZED authRoutes.js GET/protected Not Successful')
//   }
// })
