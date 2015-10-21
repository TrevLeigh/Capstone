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
    
    var fbUserSchema = mongoose.Schema({
        id: String,
        token: String,
        email: String,
        username: String,
        image: String
    });
    var FbUser = mongoose.model('FbUser',fbUserSchema);
    
    var googleUserSchema = mongoose.Schema({
        id: String,
        token: String,
        email: String,
        username: String,
        image: String
    });
    
    var GoogleUser = mongoose.model('GoogleUser', googleUserSchema);
}

