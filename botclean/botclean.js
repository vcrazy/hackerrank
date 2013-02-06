process.stdin.resume();
process.stdin.setEncoding("ascii");

process.stdin.on("data", function(input){
	process.stdout.write('');
	process.exit();
});
