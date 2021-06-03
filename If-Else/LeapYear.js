console.log("==========Check Leap Year==========");
const prompt = require('prompt-sync')();
var year = prompt('Which year you wants to check, please enter : ');
var CheckLeapYear = (0 == year % 4) && (0 != year % 100 ) || (0 == year % 400);
if (CheckLeapYear)
    console.log(year + " is a Leap year!!!");
else
    console.log(year + " is not a Leap year!");