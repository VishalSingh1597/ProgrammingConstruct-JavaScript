console.log("================== Welcome To Gambler Game ========================")

//Constants declaration
var Money = 100
const Goal = 200
//Variables declaration
var Win = 0
var Lose = 0
console.log("Intial Money is 100.")
while ((Money < Goal) && (Money > 0)) 
{
    var BetPlay = Math.floor(Math.random() * 2)
    if (BetPlay == 0) 
    {
        Money++
        Win++
    }
    else 
    {
        Money--
        Lose++
    }
}
if ((Money == 200) && (Money == 0))
 {
    console.log("Player has won the game!!")
} else 
{
    console.log("Player has lose  the game.")
}
console.log("Final Money After Game : " + Money +"\n"+ "No Of Win Times : " + Win +"\n"+ "No Of  Bet Times : " +(Win+Lose))