console.log("========== Power of two till 256 =============");

const Prompt = require('prompt-sync')();
let num = Number(Prompt('Please enter any number : '));
let temp = 1;
while (temp <= num) 
{
    let result = Math.pow(2, temp);
    if (result > 256)
        break;
    console.log("2 To The Power ^" + temp + " is => " + result)
    temp++;
}