var path = require('path');
var rootPath = path.normalize(__dirname + '../../../');
module.exports = {
    development: {
        db: 'mongodb://localhost/capstone',
        rootPath: rootPath,
        port: process.env.PORT || 3030
    },
    production: {
        rootPath: rootPath,
        db: 'mongodb://thawkins:capstone@ds057254.mongolab.com:57254/capstone',
        port: process.env.PORT || 3030
        
    },
    'facebookAuth' : {
        'clientID'      : '146461855715058', 
        'clientSecret'  : 'ed18284513ffee651416b8286e8973c6', 
        'callbackURL'   : 'https://singlepoint.herokuapp.com/auth/facebook/callback'
    },
    'googleAuth' : {
        'clientID'      : '382954964029-pj4p6t3fqjfj37f4fpi9ddebbo9r8jjp.apps.googleusercontent.com ',
        'clientSecret'  : '_AMopx8BDOIj0lA_1_lE9Cjr',
        'callbackURL'   : 'http://singlepoint.herokuapp.com/auth/google/callback'
    }
};
