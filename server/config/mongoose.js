var mongoose = require('mongoose'), 
    crypto = require('crypto');

module.exports = function(config){
    mongoose.connect(config.db);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));

    db.once('open', function callback(){
        console.log('capstone db opened');
    });
    
    var userSchema = mongoose.Schema({
        firstname: String,
        lastname: String, 
        username: String,
        salt: String,
        hashed_pwd: String
    });
    userSchema.methods = {
        authenticate: function(passwordToMatch){
            return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        }
    }
    var User = mongoose.model('User', userSchema);
    
    User.find({}).exec(function(err, collection){
        if(collection.length === 0){
            var salt, hash;
            salt = createSalt();
            hash = hashPwd(salt, 'trev');
            User.create({firstname:'Trevor', lastname:'Hawkins', username:'Trev', salt: salt, hashed_pwd: hash});
            salt = createSalt();
            hash = hashPwd(salt, 'e-40');
            User.create({firstname:'Nick', lastname:'Jurado', username:'E-40', salt: salt, hashed_pwd: hash});
            salt = createSalt();
            hash = hashPwd(salt, 'lois');
            User.create({firstname:'Luis', lastname:'Heinkie', username:'Lois', salt: salt, hashed_pwd: hash});
        }
    });
}

function createSalt(){
    return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd){
    var hmac = crypto.createHmac('sha1',salt);
    return hmac.update(pwd).digest('hex');
}