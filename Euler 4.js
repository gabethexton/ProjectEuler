/*
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/
/*
Notes:
start at 999*999 (=998,001) and count backwards.
mult the nums
compare the mult by reversing it
if matched log answer
else if numOne > 0, numOne--
else if numOne =0 offset++ and numOne= start - offset
*/

const start = 999;
var offset = 0;
var numOne = 999;
var numTwo = 999;
var numMult = (numOne * numTwo);
var match = null;
