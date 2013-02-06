function result(numbers, difference){
	var struct = {},
		number = 0;

	for(var i in numbers){
		struct[numbers[i]] = true;
	}

	for(var i in struct){
		if(struct[i + difference]){
			number++;
		}
	}

	return number;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

process.stdin.on("data", function(input){
	var start = + new Date;
	var data = input.split("\n");
	var difference = data[0].split(' ')[1] * 1;
	var numbers = data[1].split(' ').map(function(e){
		return e * 1;
	})
	var mid = + new Date;
	process.stdout.write(result(numbers, difference).toString());
	var end = + new Date;
//	console.log("\n", end - mid, mid - start);
	process.exit();
});
