var Regimen = require('mongoose').model('Regimen');

exports.getRegimens = function(req,res){
    Regimen.find({}).exec(function(err,collection){
        res.send(collection);
    });
};

exports.getRegimensById = function(req,res){
    Regimen.findOne({_id: req.params.id}).exec(function(err,regimen){
        res.send(regimen);
    });
};

exports.createRegimens = function(req,res){
    var regimenData = req.body;
    
    Regimen.create(regimenData,function(err,regimen){
        if(err){
            res.status(400);
            return res.send({reason:err.toString()});
        }
            res.send(regimen);
    });
};

exports.editRegimen = function(req,res){
    Regimen.findOne({_id: req.params.id},function(err,regimen){
        regimen.name = req.body.name;
    });
};

exports.deleteRegimen = function(req,res){
    Regimen.remove({_id:req.params.id},function(err,regimen){
        res.send(regimen);
    });
};