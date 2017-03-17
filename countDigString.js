function countDig(value) {
  return String(value).length;
}

var x;

x = 7;
console.log(x + " -> " + countDig(x));

x = 124;
console.log(x + " -> " + countDig(x));

x = 120004;
console.log(x + " -> " + countDig(x));

x = 0;
console.log(x + " -> " + countDig(x));

x = -7;
console.log(x + " -> " + countDig(x));

