var Rand1 = (min, max) =>Math.floor(Math.random() * (max - min) + min);
var res1 = (Rand1(10, 100));

var Rand2 = (min, max) =>Math.floor(Math.random() * (max - min) + min);
var res2 = (Rand1(10, 100));

var Rand3 = (min, max) =>Math.floor(Math.random() * (max - min) + min);
var res3 = (Rand1(10, 100));

var Rand4 = (min, max) =>Math.floor(Math.random() * (max - min) + min);
var res4 = (Rand1(10, 100));

var Rand5 = (min, max) =>Math.floor(Math.random() * (max - min) + min);
var res5 = (Rand1(10, 100));

console.log("Sum of 5 Random numbers are : ");
console.log(res1+res2+res3+res4+res5);
console.log("Average of 5 Random numbers are : ");
console.log((res1+res2+res3+res4+res5)/5);
