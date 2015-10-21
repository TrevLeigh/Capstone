var User = require('mongoose').model('FbUser'));

exports.getUsers = function(req,res){
    User.find({}).exec(function(err, collection){
        res.send(collection);
    });
};
