const { Router } = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const BearerStrategy = require('passport-http-bearer');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = Router();

const inventoryRoute = require('./inventory');
const authRoute = require('./auth');

// Load User model
const User = require('../models/User');

function verifyJWT(token) {
  let isValid = false;
  if (token) {
    jwt.verify(token, 'privateKey', function(err) {
      if (err) {
        isValid = false;
      } else {
        isValid = true;
      }
    });
  } else {
    isValid = false;
  }
  return isValid;
}

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    (username, password, done) => {
      // here should be call to DB to validate the user creds
      // db username & password: user, password
      // db password encrypted: $2y$12$UH2VqcFFlOBV2uvAMuaRueTltl/T.h5fftXIaESFlkaXqey3H3VnO
      User.findOne({
        username: username
      }).then(user => {
        if (!user) {
          return done(null, false, {
            message: 'That username is not registered'
          });
        }

        // Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, user);
          }
          return done(null, false, { message: 'Password incorrect' });
        });
      });
    }
  )
);

passport.use(
  new BearerStrategy((token, done) => {
    // token verification
    const isValid = verifyJWT(token);
    if (!isValid) {
      return done(null, false, {
        errors: { 'email or password': 'is invalid' }
      });
    }
    return done(null, token);
  })
);

router.use(
  '/inventory',
  passport.authenticate('bearer', { session: false }),
  inventoryRoute
);

router.use(
  '/auth',
  passport.authenticate('local', { session: false }),
  authRoute
);

module.exports = router;
