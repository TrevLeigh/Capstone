

module.exports = function(app){
    
    app.get('/register',function(req,res){
        res.render('register');
    });

    app.get('/login', function(req,res){
        res.render('login');
    });


    app.get('/partials/*', function(req,res){
        res.render('../../public/app/' + req.params[0]);
    });

    app.get('/', function(req, res){
        res.render('index');
    });
}