var fs=require('fs');
var arr;
function solution(printSolution){
	fs.readdir(process.argv[2], function readInput(err,data){
			var str=data.toString();
			arr= str.split(",");
			printSolution(arr);
		});
}

function printSolution(arr){
	for(var i=0;i<arr.length;i++){
		//console.log(arr[i]);
		if(arr[i].indexOf("."+process.argv[3])!== -1){
			console.log(arr[i]);
		}
	}
}

solution(printSolution);