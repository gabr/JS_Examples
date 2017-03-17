function countDig(value) {
  var count;

  if (value < 0)
    value *= -1; // value = value * -1;

  for (count = 0; value > 1.0; count++)
    value /= 10; // value = value / 10

  return count;
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

