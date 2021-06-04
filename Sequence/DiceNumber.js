//1st Method : Using Function
function Dice(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
console.log(Dice(1, 7));

//2nd method
console.log("Single Random Number is : "+Math.floor(Math.random() * 7)); 