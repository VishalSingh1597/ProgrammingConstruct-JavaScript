console.log("Please enter number 1,10,100,1000,10000 to display in words : ");

const prompt = require('prompt-sync')();
let inputNum = Number(prompt('Enter Number : '));
switch(inputNum)
{
    case 1:
    console.log("Unit");
    break;
    case 10:
    console.log("Ten");    
    break;
    case 100:
    console.log("Hundered");
    break;
    case 1000:
    console.log("One Thousand");
    break;
    case 10000:
    console.log("Ten Thousand");
    break;
    default:
    console.log("Invalid input,Please enter from given range.");
    break;
}