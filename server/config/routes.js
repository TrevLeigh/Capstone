
var auth = require('./auth'),
    users = require('../controllers/users');

module.exports = function(app){


    app.get('/api/users', users.getUsers);
    
    app.post('/api/users', users.createUser);
    
    app.get('/login', function(req,res){
        res.render('index',{
           bootstrappedUser: req.user 
        });
    });
    app.get('/home',function(req,res){
        res.render('index',{
           bootstrappedUser: req.user 
        });
    });
   
    
    app.get('/signup',function(req,res){
        res.render('index');
    });

    app.get('/partials/*', function(req,res){
        res.render('../../public/app/' + req.params[0]);
    });
    
     app.get('/', function(req, res){
        res.render('index');
    });
    
    app.post('/loginPost', auth.authenticate);
    
    app.post('/logout', function(req,res){
        req.logout();
        res.end();
    });
       
}