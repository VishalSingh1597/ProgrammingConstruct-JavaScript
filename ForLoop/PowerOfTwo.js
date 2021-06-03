console.log("=========Check Power of 2===========");

const prompt = require('prompt-sync')();
let num = Number(prompt('Enter a Number : '));
let result = 1;
for(let s = 1; s <= num; s++)
{
    result = result*2;
    console.log("2 to the Power -  " + s + " is => " + result);
}