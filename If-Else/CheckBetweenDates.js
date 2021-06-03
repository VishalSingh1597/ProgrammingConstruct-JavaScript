console.log("==============Check date between months march 20 to june 20=================");

//Setting date and month condition
var startDate = new Date();
startDate.setDate(20);
startDate.setMonth(3);
var endDate = new Date();
endDate.setMonth(6);
endDate.setDate(20);

//Taking inputs from user
var userInput = new Date();
const prompt = require('prompt-sync')();
const monthInput = prompt('Please enter the month : ');
userInput.setMonth(monthInput);
const dateInput = prompt(' Please enter the date  : ');
userInput.setDate(dateInput);

//Display
if (userInput > startDate && userInput < endDate)
    console.log("Date lies between March 20 and June 20!!!");
else
    console.log("Date doesn't lie between march 20 and june 20.");