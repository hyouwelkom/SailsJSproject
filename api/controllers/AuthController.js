var passport = require('passport');

module.exports = {

  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  login: function(req, res) {

    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user)) {
        return res.send({
          message: info.message,
          user: user
        });
      }
      req.logIn(user, function(err) {
        console.log("login");
        if (err) res.send(err);
        res.redirect('/account');
      });

    })(req, res);
  },

  logout: function(req, res) {
    console.log("logout");
    req.logout();
    res.redirect('/');
  }
};
