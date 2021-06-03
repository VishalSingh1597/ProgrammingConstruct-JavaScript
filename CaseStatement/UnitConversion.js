console.log("=========== Welcome to unit conversion ==========")

const prompt = require('prompt-sync')();
console.log('Choices : \n1. Feet to Inch\n2. Feet to Meter\n3. Inch To Meter\n4. Meter to Feet');

let choice = Number(prompt('Please enter your choice conversion : '));
let num =  Number(prompt('Please enter any number : '));
let result;
switch(choice)
{
    case 1:
        result = num * 12;
        break;
    case 2:
        result = num * 0.305;
        break;
    case 3:
        result = num * 0.0254;
        break;
    case 4:
        result = num * 3.28084;
        break;
    default:
        result = 'Invalid Input';
        break;
}
console.log(result);