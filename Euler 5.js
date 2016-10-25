/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

/*
20 covers 20,10,5,2,1
19
18 covers 9,6,3
17
16 covers 8,4
15
14 covers 7
13
12
11
*/

var counter = 2520;
var found = false;

function work() {
  console.log(counter);
	while (found === false) {
		console.log(counter);
		if (counter % 20 === 0 && counter % 19 === 0 && counter % 18 === 0 && counter % 17 === 0 && counter % 16 === 0 && counter % 15 === 0 && counter % 14 === 0 && counter % 13 === 0 && counter % 12 === 0 && counter % 11 === 0) {
				found = true;
				console.log("The smallest possible nubmer evenly divisible by all of the numbers from 1 to 20 is " + counter);
		} else {
			counter++;
			console.log("next up is..." + counter);

	}
		}

}
work();