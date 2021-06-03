console.log("============= Check if two numbers are palindrome or not ==================")

const Prompt = require('prompt-sync')();
let num1 = Number(Prompt('Enter Number1 : '));
let num2 = Number(Prompt('Enter Number2 : '));

function CheckPalindrome(num1, num2) 
{

    let CheckNum1 = String(num1);
    let CheckNum2 = String(num2);
    if (CheckNum1.length != CheckNum2.length)
        return false;
    let isPalindrome = true;
    for (let len = 0; len < CheckNum1.length; len++) 
    {
        if (CheckNum1[len] != CheckNum2[CheckNum2.length - len - 1])
            isPalindrome = false;
    }
    return isPalindrome;
}
if (CheckPalindrome(num1, num2))
    console.log("Both numbers are palindrome!!");
else
    console.log("Both numbers are not palindrome.");