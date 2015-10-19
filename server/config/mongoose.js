var mongoose = require('mongoose'), 
    encrypt = require('../utilities/encryption');

module.exports = function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));

    db.once('open', function callback(){
        console.log('capstone db opened');
    });
    
    var userSchema = mongoose.Schema({
        email: String, 
        username: String,
        salt: String,
        hashed_pwd: String,
        roles: [String]
    });
    userSchema.methods = {
        authenticate: function(passwordToMatch){
            return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        }
    }
    var User = mongoose.model('User', userSchema);
    
    User.find({}).exec(function(err, collection){
        if(collection.length === 0){
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'trev');
            User.create({email: 'thawkins@neumont.edu', username:'Trev', salt: salt, hashed_pwd: hash, roles:['admin']});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'e-40');
            User.create({email: 'njurado@neumont.edu', username:'E-40', salt: salt, hashed_pwd: hash, roles:[]});
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'lois');
            User.create({email:'lhenicke@neumont.edu', username:'Lois', salt: salt, hashed_pwd: hash});
        }
    });
}

