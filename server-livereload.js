livereload = require('livereload');
server = livereload.createServer();
server.watch(__dirname + "/www");

require('server.js');