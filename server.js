var express = require('express'),
    app     = express(),
    path =  require('path');

var appPort = process.env.OPENSHIFT_NODEJS_PORT || 8080,
	ip   = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


    var http = require('http')
    , server = http.createServer(app, ip);

    server.listen(appPort, ip);


app.use('/assets', express.static(path.join(__dirname, 'public/assets')));
app.use('/scripts', express.static(path.join(__dirname, 'public/scripts')));
app.use('/styles', express.static(path.join(__dirname, 'public/styles')));

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


app.get('/', (req, res) => {
    res.render('index.html');
});


if (process.env) {
    console.log("Nodejs Server listening on port " + process.env.OPENSHIFT_NODEJS_PORT);
    console.log("IP Server listening on IP " + process.env.OPENSHIFT_NODEJS_IP);
}

console.log("Nodejs Server listening on port " , appPort);
console.log("Nodejs Server listening on port " , ip);
