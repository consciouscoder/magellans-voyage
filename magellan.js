var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan')
var nodemon = require('nodemon')
// var locations = require('./models/locations.json');


var app = express();
app.set('view engine', '');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({extended: false}));


    app.get('/', function(req, res) {
        res.sendFile('seville.html', {root : './public/html'})
    })
    
    app.get('/:name', function(req, res){
        res.sendFile(req.params.name + '.html',  {root : './public/html'})
    })
    
    app.use(function(err, req, res, next){
        console.error(err)
        res.status(500).send('Mag dude didnt come through here')
    })
    
    // app.get('/capeverde', function(req, res){
    //     res.sendFile('capeverde.html', {root : './public/html'})
    // })
    
    // app.get('/strait', function(req, res){
    //     res.sendFile('strait.html', {root : './public/html'})
    // })
    
    // app.get('/guam', function(req, res){
    //     res.sendFile('guam.html', {root : './public/html'})
    // })
    
    // app.get('/phillipines', function(req, res){
    //     res.sendFile('phillipines.html', {root : './public/html'})
    // })

var port = process.env.PORT || 3000

app.listen(port, function() {
	console.log('Express server listening on port ' + port)
});
