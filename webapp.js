var express = require ('express');

var app = express();

app.set('port',process.env.PORT || 3000);
app.use(express.static(__dirname+ '/public'));

var bugData =[
{id :1 , priority :"P1" ,status: "Open", owner :"Raven" ,title :"App crashes on open"},
{id:2, priority:"P2", status:"New", owner :"Eddie", title :"Misaligned border on panel"}
];

app.get('/api/bugs', function(req,res){
	res.status(200).send(JSON.stringify(bugData));
});

app.get('/',function (req,res){
	res.send( 'Hello World');
});

app.get('/about', function (req, res){
	res.send ('About Bug Tracker');
});

app.use(function(req, res, next){
	res.type ('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

app.listen(app.get('port'),function(){
	console.log('Applicaiton started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});