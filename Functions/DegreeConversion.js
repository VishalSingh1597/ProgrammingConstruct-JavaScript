console.log("============Temperature conversion================");

const Prompt = require('prompt-sync')();
console.log("1.Convert Celsius to Fahrenheit \n 2.Convert Fahrenheit to Celsius ");
let choice = Number(Prompt('Please enter your choice : '));
switch (choice) 
{
    case 1:
        CelsiusToFahrenheit();
        break;
    case 2:
        FahrenheitToCelsius();
        break;
    default:
        console.log("Your choice is InValid.");
        break;
}
function CelsiusToFahrenheit()
{
    let degC = Number(Prompt('Please enter temperature in degree celsius : '));
    if (degC >= 0 && degC <= 100)
    {
        let degF = (degC * (9 / 5)) + 32;
        console.log(degC + " in degree celsius is = " + degF + " in Fahrenheits.");    
    }
    else
    {
        console.log("Entered temperature is not in a range.");
    }
}
function FahrenheitToCelsius()
{
    let degF = Number(Prompt('Please enter temperature in fahrenheits : '));    
    if (degF >= 32 && degF <= 212)
    {
        let degC = (degF - 32) * (5 / 9);
        console.log(degF + " in Fahrenheits is = " + degC + " in degree Celsius.");    
    }
    else
    {
        console.log("Entered temperature is not in a range.");
    }
}