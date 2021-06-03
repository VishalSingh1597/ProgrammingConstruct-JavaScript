console.log("Please enter number between 1 to 7 to display days in words : ")
const prompt = require('prompt-sync')();
const inputNum = Number(prompt('Please enter single number to display day : '));
switch(inputNum)
{
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tuesday");
    break;
case 3:
    console.log("Wednesday");
    break;
case 4:
    console.log("Thursday");
    break;
case 5:
    console.log("Friday");
    break;
case 6:
    console.log("Saturday");
    break;
case 7:
        console.log("Sunday");
        break;
default:
    console.log("Invalid Input, Please enter between 1 to 7.");
    break;
}