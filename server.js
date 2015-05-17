var express = require('express'),
    app = express();

app.use(express.static('www'));

// serve up bower_components at /components
app.use('/components', express.static('bower_components'));

// serve up a placeholder cordova.js
app.use('/cordova.js', function(req, res, next) { res.send('//don\'t worry, be happy'); });

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// API Routes
// app.get('/blah', routeHandler);

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
