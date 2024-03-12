function sum() {
  let a = 10;
  function add(b) {
    return a + b;
  }
  return add;
}
const fn = sum();
console.log(fn);
let total = fn(20);
console.log(total);
//......................................................
function x(a) {
  function y(b) {
    function z(c) {
      return a + b + c;
    }
    return z;
  }
  return y;
}
//outer function accepts an argument and returns a function
const p = x(20);
console.log("p....................>", p);
//middle function also accepts an argument and returns a total of both
const q = p(30);
console.log("q.....................>", q);
//inner function also accepts an argument and returns the total of all
const r = q(20);
console.log(r);

