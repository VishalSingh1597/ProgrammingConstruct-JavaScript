console.log("Find min max in five random numbers")
var min = 999, max = 0;

for (let count = 1; count <= 5; count++) 
{
    randomNumber = Math.floor(Math.random() * 900 + 100);
    console.log("Random number " + count + " is : " + randomNumber)
    //Initially max is zero then after first iteration whatever value is stored in randomNumber will compare with max.
    if (randomNumber > max) 
    {
        max = randomNumber;
    }
    if (randomNumber < min) 
    {
        min = randomNumber;
    }
}
console.log("Minimum number is : " +min)
console.log("Maximum number is : " +max)