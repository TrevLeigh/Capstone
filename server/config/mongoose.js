var mongoose = require('mongoose');

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
        username: String
    });
    
    var User = mongoose.model('User', userSchema);
    
    User.find({}).exec(function(err, collection){
        if(collection.length === 0){
            User.create({firstname:'Trevor', lastname:'Hawkins', username:'Trev'});
            User.create({firstname:'Nick', lastname:'Jurado', username:'E-40'});
            User.create({firstname:'Luis', lastname:'Heinkie', username:'Lois'});
        }
    });
}