var length = process.argv.length;
var sum=0;
for(i=2;i<length;i++){
	//console.log(process.argv[i]);
	sum = sum + Number(process.argv[i]);
}
console.log(sum);