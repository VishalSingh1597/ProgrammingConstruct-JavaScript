console.log("========Harmonic number========");

const prompt = require('prompt-sync')();
let num = Number(prompt("Enter number to get its nth harmonic : "));
let harmonic = 0;
for (let i = 1; i <= num; i++)
{
        harmonic += 1 / i;
}
console.log("Sum of harmonic is : " + harmonic);