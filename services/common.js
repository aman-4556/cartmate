const passport = require('passport');

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt');
};

exports.sanitizeUser = (user) => {
  return { id: user.id, role: user.role };
};

exports.cookieExtractor = function (req) {
  var token = null;
  if (req && req.cookies) {
    token = req.cookies['jwt'];
  }
  //TODO : this is temporary token for testing without cookie
 // token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NmMxMzRjMTVjODNlNjNmM2FjY2FlMSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxODM2Nzk0Mn0.3aN6N7BRE6BW9HYTRv5y3BkXdQ2k3z31A9zbYGcCpEQ"
  return token;
};