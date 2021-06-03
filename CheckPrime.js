console.log("===========Check Prime Number=============");

const prompt = require('prompt-sync')();
let num = Number(prompt('Enter Number : '));
var val = 0;
for (count = 1; count <= num; count++)
 {
    if ((num % count) == 0) 
    {
        val++
    }
}
if (val == 2) 
{
    console.log("Number " + num + " is a Prime Number!")
} 
else
 {
    console.log("Number "+ num + " is a Not a Prime Number!")
}