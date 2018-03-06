module.exports = {

  index: function(req, res) {
    console.log(req.user);
    console.log("test");

    Address.find({
      owner : req.user.id
    }).exec(function (err, records) {
      //return res.json(records);
      var data = {};
      data.listadresses = records;
      return res.view('account', data);
    });


  },

  verrou : function(req, res){
    return res.view('homepage');
  }
};
