console.log("===========Factorial of a number=========")

const Prompt = require('prompt-sync')();
let num = Number(Prompt('Please enter a number : '));
let fact = 1;
for (let i = 1; i <= num; i++) 
{
    fact = fact * i;
}
console.log("Factorial of " + num + " is : " + fact);