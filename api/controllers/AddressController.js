/**
 * AddressController
 *
 * @description :: Server-side logic for managing Addresses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  ma_methode: function(req, res) {
    return res.json({user: 'toto'});
    //return res.view('homepage');
  },
  find: function (req, res) {
    var where = {
      owner : req.user
    };
    Address.find(where).exec(function (err, records) {
      return res.json(records);
    });
  }


};

