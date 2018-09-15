var fs=require('fs');
var finalResult;
function solution(){
fs.readFile(process.argv[2], function readInput(err,data){
//console.log(data);
buf= new Buffer(data);
var str=buf.toString();
var array= str.split("\n");
finalResult=array.length - 1 ;
printSolution();
});
}

function printSolution(){
	console.log(finalResult);
}

solution();