var 	express		= require('express'),
        router          = express.Router(),
    	app			= express(),
    	port        = process.env.PORT || 3000;


//some basic redirect routes
app.get('/', function(req, res) {
  res.redirect('prose/');
});

app.set('case sensitive routing', false);

app.use('/prose', express.static(__dirname + '/node_modules/prose'));

app.listen(port, function() {
    console.log('listening');
});
