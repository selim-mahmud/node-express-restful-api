const passport = require('passport');
const user = require('../models').user;
const config = require('../config/config');
const jwtStrategy = require('passport-jwt').Strategy;
const extractJwt = require('passport-jwt').ExtractJwt;
const localStrategy = require('passport-local');

const localOptions = {usernameField: 'email'};
const localLogin = new localStrategy(localOptions, (email, password, done) => {
    user.findOne({ where: {email} })
        .then(user => {
            if(!user){return done(null, false)}

            user.comparePassword(password, (err, isMatch) => {
                if(err){return done(null, false);}

                if(!isMatch){return done(null, false);}

                return done(null, user);
            });

        })
        .catch(error => done(error, false));
});

const jwtOptions = {
    jwtFromRequest: extractJwt.fromHeader('authorization'),
    secretOrKey: config.appSecret
};

const jwtLogin = new jwtStrategy(jwtOptions, (payload, done) => {

    user.findById(payload.sub)
        .then(user => {
            if (user) {
                done(null, user);
            }else{
                done(null, false);
            }
        })
        .catch(error => done(error, false));

});

passport.use(jwtLogin);
passport.use(localLogin);