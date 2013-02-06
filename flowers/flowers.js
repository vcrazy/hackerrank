function calculate(settings){
	var sum = 0,
		people = settings.people,
		already_bought = 0;

	settings.prices.sort(function(a, b){
		return a < b;
	});

	while(people){
		var spliced = settings.prices.splice(0, settings.people).
			spliced_length = spliced.length;

		people -= settings.people;

		for(var i = 0; i < spliced_length; i++){
			sum += (1 + already_bought) * (spliced[i]);
		}

		already_bought++;
	}

	return sum;
}

process.stdin.resume();
process.stdin.setEncoding("ascii");

process.stdin.on("data", function(input){
//	var start = + new Date;
	var data = input.split("\n"),
		flowers = data[0].split(' ')[0] * 1,
		people = data[0].split(' ')[1] * 1,
		prices = data[1].split(' ').map(function(e){
			return e * 1;
		});

//	flowers = 3;
//	people = 3;
//	prices = [1, 10, 5, 3, 7];

//	var mid = + new Date;
	var answer = calculate({
		flowers: flowers,
		people: people,
		prices: prices
	});
	process.stdout.write(answer);
//	var end = + new Date;
//	console.log("\n", end - mid, mid - start);
	process.exit();
});
