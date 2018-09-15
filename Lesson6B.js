var fs=require('fs');
var arr;
var solution = function(dir,ext,callback){
	var file=[];
	fs.readdir(dir, function readInput(err,data){
		if(err) return callback(err);
			var str=data.toString();
			arr= str.split(",");
			for(var i=0;i<arr.length;i++){
				if(arr[i].indexOf("."+ext)!== -1)
					file.push(arr[i]);
			}
			return callback(null,file);
		});
}

module.exports = solution;
