console.log("==========Find Prime number in range========")

const Prompt = require('prompt-sync')();
let num1 = Number(Prompt('Please enter the first number : '));
let num2 = Number(Prompt('Please enter the second number : '));
console.log("Prime number between given range are : ");

if (num1 == 1)
    num1++;
for (let j = num1; j <= num2; j++) 
{
    let is_prime = true;
    for (let i = 2; i <= Math.sqrt(j); i++) 
    {
        if (j % i === 0)
            is_prime = false;
    }
    if (is_prime)
        console.log(+j);
}