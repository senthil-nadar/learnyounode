var http=require("http");
var port=process.argv[2];
var Url = require("url");
var server= http.createServer(function(request,response){

var parseUrl = Url.parse(request.url,true);
var pathname= parseUrl.pathname;
var isoDate=new Date(parseUrl.query.iso);
var unixDate=new Date(parseUrl.query.iso).getTime();
response.writeHead(200, { 'Content-Type': 'application/json' });
if(pathname.indexOf("parsetime") != -1){
	var parseTimeJson = {
		"hour" : isoDate.getHours(),
		"minute" : isoDate.getMinutes(),
		"second" : isoDate.getSeconds()
	};
	response.end(JSON.stringify(parseTimeJson));
}

if(pathname.indexOf("unixtime") != -1){
		var unixTimeJson = {
			"unixtime" : unixDate
	};
	response.end(JSON.stringify(unixTimeJson));
}


	
});

server.listen(port);
