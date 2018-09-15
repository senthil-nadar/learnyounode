var http = require("http");
var firstURL=process.argv[2];
var secondURL=process.argv[3];
var thirdURL=process.argv[4];
	http.get(firstURL, function callback(response){
		var one="";
		if(response){
			response.setEncoding("utf8");
			response.on("data",function(data){
				one+=data;
			});
			response.on("end", function(){
				console.log(one);
				http.get(secondURL, function callback(response){
				var two="";
				if(response){
				response.setEncoding("utf8");
				response.on("data",function(data){
				two+=data;
				});
						response.on("end", function(){
							console.log(two);
							http.get(thirdURL, function callback(response){
							var three="";
							if(response){
							response.setEncoding("utf8");
							response.on("data",function(data){
								three+=data;
							})
							response.on("end", function(){console.log(three);});
							} 
							});
						});
				} 
				});
				});
		} 
	});
	
		
		