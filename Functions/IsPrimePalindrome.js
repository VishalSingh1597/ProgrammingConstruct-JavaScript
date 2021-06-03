console.log("==========Check if a number is a prime then also check if palindrome or Not==========");

const Prompt = require('prompt-sync')();
let num = Number(Prompt('Please enter a number : '));
if (CheckPrime(num) == true) 
{
    console.log(num + " is a prime number");
    var palindrome = CheckPalindrome(num);
    if (CheckPrime(palindrome))
        console.log("It's palindrome : " + palindrome + " => is also a prime number.");
    else
        console.log("It's palindrome : " + palindrome + " is not a prime number.");
}
else 
{
    console.log(num + " is not a prime number!!");
}

function CheckPalindrome(num) 
{
    let number = String(num);
    let palindrome = number[number.length - 1];
    for (let len = 1; len < number.length; len++) 
    {
        palindrome = palindrome.concat(number.charAt(number.length - 1 - len));
    }
    return Number(palindrome);
}

function CheckPrime(num) {
    let IsPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) 
    {
        if (num % i === 0)
            IsPrime = false;
    }
    return IsPrime;
}