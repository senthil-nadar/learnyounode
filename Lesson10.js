var net=require("net");

var server= net.createServer(function(socket){
	var date=new Date();
	var month=date.getMonth();
	if(month < 10)
		month = "0"+ (month+1);
	var data=date.getFullYear()+"-"+month+"-"+date.getDate()+" "+date.getHours()+":"+date.getMinutes();
	socket.write(data+"\n");
	socket.end();
})

server.listen(process.argv[2]);
