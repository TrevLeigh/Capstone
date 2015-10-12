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
        db: 'mongodb://localhost/capstone',
        port: process.env.PORT || 80
        
    }

}
