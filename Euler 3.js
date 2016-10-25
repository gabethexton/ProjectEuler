'use strict';
/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

// function largestFactor(number) {
//
// 	var a = number;
//   	console.log("Input Number is: " + number);
// 	var b = Math.floor(Math.sqrt(number));
//   	console.log("It's Square Root is: " + b);
// }
//
// console.log("Largest Prime Factor is: " + "******");
// largestFactor(13195);
// largestFactor(600851475143);

//
// NOT YET WORKING!
//
//
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?
//

function largestFactor(number) {

	var a = number;
  	console.log("Input Number is: " + number);

	var b = (Math.sqrt(number));
  	console.log("It's Square Root is: " + b);

  	var lpf = Math.floor(b) ;

while (lpf > 2) {

	if ((a % b) === 0) {

		for (var i=0;i<lpf;i++)
			if ((b % i) === 0);
			console.log("B is currently: " + b)

	}
	else {

		b--;
    console.log("B is currently: " + b);

		}
    console.log("Largest Prime Factor is: " + lpf);
    lpf = 0;
	}
}
largestFactor(23);
// largestFactor(13195);
// largestFactor(600851475143);

/*
NOT YET WORKING!
1234169*486847=600851475143
*/
