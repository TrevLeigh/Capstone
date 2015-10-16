
var auth = require('./auth');

module.exports = function(app){
    
    app.get('/home',function(req,res){
        res.render('home');
    });
    
    app.get('/register',function(req,res){
        res.render('register');
    });

    app.get('/login', function(req,res){
        res.render('login');
    });

    app.get('/', function(req, res){
        res.render('index');
    });

    app.get('/partials/*', function(req,res){
        res.render('../../public/app/' + req.params[0]);
    });
    
    app.post('/loginPost', auth.authenticate);
    
    
    
    
}