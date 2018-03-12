var express = require('express'),
    app     = express(),
    path =  require('path');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8081,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || 'localhost';


    var http = require('http')
    , server = http.createServer(app, ip);

    server.listen(port, ip);


app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/scripts', express.static(path.join(__dirname, 'public/scripts')));
app.use('/styles', express.static(path.join(__dirname, 'public/styles')));

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


app.get('/', (req, res) => {
    res.render('./index.html');
});


console.log("Server listening on port " + port);