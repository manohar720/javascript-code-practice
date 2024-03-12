//(1)Arithematic Operators//

let x = 7;
let y = 9;
let x1 = "7";
let y1 = 9;
let z = "manohar";

//addition//
let add = x + y;
console.log("ans: ", ans); //16

let add1 = x1 + y1;
console.log("add1: ", add1); //79

let add2 = x + z;
console.log("add2: ", add2); //7manohar

//substraction
let sub = x - y;
console.log("sub: ", sub); //-2

let sub1 = x1 - y1;
console.log("sub1 : ", sub1); //-2   using  Number() function

let sub2 = x - z;
console.log("sub2 : ", sub2); // NAN

//multiplication
let mul = x * y;
console.log("mul : ", mul); //63

let mul1 = x1 * y1;
console.log(" mul1: ", mul1); //63

let mul2 = x * z;
console.log("mul2: ", mul2); //nan

//division
let div = x / y;
console.log("div: ", div); //0.77777
let div1 = x1 / y1;
console.log("div1: ", div1); //0.777

//(2)Remainder Operators://
let rem = x % y;
console.log("rem: ", rem); //7

//(3)Assignment Operators
let num = 9;
num += 2;
console.log("num: ", num); //11

let num1 = 8;
num1 -= 1;
console.log("num1: ", num1);

let num3 = 5;
num3 *= 3;
console.log(" num3: ", num3);
let num4 = 8;
num4 /= 2;
console.log("num4: ", num4); //4

//(4)Unary Operators

let m = "4"; //type string
let n = +m;
console.log(typeof n); //type number

let m1 = 7;
let n1 = -m1;
console.log("n1: ", n1); //-7

let x5 = false,
  x6 = true;

console.log(!x5); //true
console.log(!x6); //false

//(5)Comparison Operators

let a = 20;
b = 30;
console.log(a == b); //f
console.log(a != b); //f
console.log(a > b); //f
console.log(a < b); //t
console.log(a >= b); //f
console.log(a <= b); //t
