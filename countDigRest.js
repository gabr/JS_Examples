function countDig(value) {
  var count = 0;

  if (value === 0) return 1;

  while (value !== 0) {
    var d = value / 10;
    var r = value % 10;
    value = d - (r/10);
    ++count;
  }

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

