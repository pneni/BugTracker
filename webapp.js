var express = require ('express');

var app = express();

app.set('port',process.env.PORT || 3000);
app.use(express.static(__dirname+ '/public'));

app.get('/',function (req,res){
	res.send( 'Hello World');
});

app.get('/about', function (req, res){
	res.send ('About Bug Tracker');
});

app.use(function(){
	res.type ('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

app.listen(app.get('port'),function(){
	console.log('Applicaiton started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});