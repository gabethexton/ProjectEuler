/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms.
By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/


/* Sets up variables to use later*/

 var fibA=1;
 var fibB=2;
 var fibC=0;
 var total= 2;

console.log("Initial Fibonacci= " + fibA + ", Plus:" );
console.log("Second Fibonacci= " + fibB + ", Plus:" );

/* function to solve the above listed problem */

while (fibC < 4000001){
	
	fibC = (fibA + fibB);
    console.log("Next Fibonacci= " + fibC + ", Plus:" );

	if ((fibC % 2) === 0) {
		total += fibC;
	}

	fibA = fibB;
	fibB = fibC;

}
console.log("Equals a Grand Total of= " + total + "!");

/*Euler 2 Solved - This code generates the correct answer.*/
