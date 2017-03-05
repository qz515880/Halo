var express = require('express');
var app = express();
app.use(express.static(__dirname+'/public'));

var handlebars = require('express3-handlebars').create({defaultLayout:'main'});
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');

app.set('port',process.env.PORT||3000);

var fortunes = ["Whenever possible, keep it simple.",
				"Revers need springs.",
				"Do not fear what you don't know.",
				"You will have a pleasant suprise.",
				"Conquer your fears or they will conquer you."];

app.get('/',function(req,res){
	// res.type('text/plain');
	// res.send('This is halo');
	res.render('home');
});

app.get('/about',function(req,res){
	// res.type('text/plain');
	// res.send('This is halo about');
	var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about',{fortune:randomFortune});
});

//404页面
app.use(function(req,res,next){
	res.status(404);
	// res.type('text/plain');
	// res.send('404-找不到页面');
	res.render('404');
});

app.use(function(err,req,res,next){
	console.error(err.stack);
	res.status(500);
	// res.type('text/plain');
	// res.send('500-服务器错误');
	res.render('500');
});

app.listen(app.get('port'),function(){
	console.log('expree start port '+app.get('port'));
});
