
/*This is code intended to solve Problem 1 of Project Euler */

/*Problem 1 states:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.*/

/*I wrote this from scratch without external input on Pi Day 2016*/
/*Because I could, that's why.*/






/*Sets a variable to total the applicable multiples.*/
var total = 0;

/*Sets up a counting loop with conditions.*/
for (var counter = 0; counter < 1000; counter ++) {
  /*Checks for multiples of 3 and adds them to total*/
  if (counter % 3 === 0) {
    total = total + counter;
    /*Checks for multiples of 5 and adds them to total*/
  } else if (counter % 5 === 0) {
    total = total + counter;
  };
};
/*Prints value of total to console.*/
console.log(total);


/*Euler 1 Solved - This code generates the correct answer.*/
