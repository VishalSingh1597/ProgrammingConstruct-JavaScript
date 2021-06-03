console.log("=======Coin flip to get head or tail======= ")
let coin = Math.floor(Math.random() * 10) % 2;
if (coin == 0)
    console.log("Heads!!");
else
    console.log("Tails!!");