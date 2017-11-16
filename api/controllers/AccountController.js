module.exports = {

  index: function(req, res) {
    console.log(req.user);
    console.log("test");

    Address.find({
      owner : req.user.id
    }).exec(function (err, records) {
      //return res.json(records);
      var data = {};
      data.lesadresses = records;
      return res.view('account', data);
    });


  }
};
