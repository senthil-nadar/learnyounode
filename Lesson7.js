var http = require("http");
var myData="";
var url = process.argv[2];
	http.get(url, function callback(response){
		
		if(response){
			response.setEncoding("utf8");
			response.on("data",function(data){
				console.log(data);
			})
		} 
	});