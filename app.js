var express = require("express");
var app = express();
var request = require("request");

app.set("view engine","ejs");
app.use(express.static("public"));


app.get("/results",function(req,res){
	var query = req.query.search
	request("http://www.omdbapi.com/?apikey=thewdb&s=" + query,function(error,response,body){
		if(!error && response.statusCode===200){
			var parsedData = JSON.parse(body);
			res.render("results",{data:parsedData});
		}
	});
});

app.get("/",function(req,res){
	res.render("search");
});


app.listen(3000,function(){
	console.log("listening to port 3000");
});
