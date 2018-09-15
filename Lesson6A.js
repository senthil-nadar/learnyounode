var myModule=require('./Lesson6B.js');
var dir=process.argv[2];
var ext=process.argv[3];

var callback = function(error, data){
	if(error) return error;
	for(var i=0;i< data.length;i++){
		console.log(data[i]);
	}
}

myModule(dir,ext,callback);

