var JwtStrategy = require('passport-jwt').Strategy;
//Pedro: sto es nuevo en la version 2.x.x sin esto es la version 1.xxx
ExtractJwt = require('passport-jwt').ExtractJwt;

// load up the user model
var User = require('../app/models/user');


var config = require('../config/database'); // get db config file
 
module.exports = function(passport) {
  var opts = {};
  //Pedro: esta linea del opts es nuevo en la version 2.x.x sin esto es la version 1.xxx
opts.jwtFromRequest = ExtractJwt.fromAuthHeader();
  opts.secretOrKey = config.secret;
  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
      console.log("Payload",jwt_payload);
    User.findOne({id: jwt_payload.id}, function(err, user) {
          if (err) {
              return done(err, false);
          }
          if (user) {
              done(null, user);
          } else {
              done(null, false);
          }
      });
  }));
};