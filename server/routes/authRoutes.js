const express = require('express');
const router = express.Router();
const Users = require('../db/models/users.js');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');



//upon successful login, get user from database, save.
//user data into session, which is in Redis
passport.serializeUser( (user, done) => {
    console.log('seralizing user', user)
    done(null, user.id)
})

//upon successful authroized request, we will take some information from the session, for example userID, to retrieve the user record form db, and put it into the req.user
passport.deserializeUser((user, done) => {
    console.log('deserializing user', user)
    done(null, user)
    })

passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
    Users
        .where({ email })
        .fetch()
        .then( user => {
            return bcrypt.compare(password, user.attributes.password)
        })
        .then( result => {
            if (result) {
                done(null, user.attributes)
            } else {
                done(null,false)
            }
        })
        .catch(err => {
            done(err)
        })
}))


router.post('/register', (req,res) => {
    const {email, password} = req.body;
    bcrypt.hash(password, 10)
        .then( hashedPassword => {
            return Users
            .forget({email, password: hashedPassword})
                .save()
        })
        .then( result => {
            if(result) {
                res.send('New User Created.')
            } else {
                res.send('There was an error creating User.')
            }
        })
        .catch( err => {
            console.log('error', err)
            res.send(err)
        })
})

router.post('.login', passport.authenticate('local', {failureRedirect: '/'}), req,res => {
    res.send('Yay, You were authenticated.')
})

router.post('/logout', (req,res) => {
    req.logout()
    res.send('Lauged Out')
})

router.get('/protected', (req, res) => {
    if (req.session.isLoggedIn) {
        res.send('You made it through the gates')
    } else {
        res.send('NONNE SHALL PASS')
    }
})

module.exports = router