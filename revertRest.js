function revert(value) {
  var result = 0,
      dig,
      tmp;

  while (value !== 0) {
    result *= 10;

    dig = value % 10;
    tmp = value / 10;
    value = tmp - (dig/10);

    result += dig;
  }

  return result;
}

var x;

x = 7;
console.log(x + " -> " + revert(x));

x = 124;
console.log(x + " -> " + revert(x));

x = 120004;
console.log(x + " -> " + revert(x));

x = 0;
console.log(x + " -> " + revert(x));

x = -7;
console.log(x + " -> " + revert(x));

x = -71;
console.log(x + " -> " + revert(x));
