const   express = require('express'),
        app     = express(), 
        bp      = require('body-parser'),
        port    = process.env.PORT || 8080;

app.use(bp.json({ limit: '700mb' }));
app.use(bp.urlencoded({
    extended: true,
    limit: '700mb',
    parameterLimit: 1000000
}));

/*  API ROUTES */
require('./api.js')(app);

app.set('port', port);

var http = require('http').Server(app);
// var https = require('https').createServer(options, app);

http.listen(app.get('port'), function () {
    console.log('Server running on port: ' + app.get('port'));
});

// https.listen(8443);