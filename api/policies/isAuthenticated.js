module.exports = function(req, res, next) {
  if (req.isAuthenticated()) {
    console.log("test");
    return next();
  }
  else{
    console.log("??");
    return res.redirect('/login');
  }
};
