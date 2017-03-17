function revert(value) {
  var multiplier = 1;

  if (value < 0) {
    value *= -1;
    multiplier = -1;
  }

  var text = String(value);
  var list = text.split('');
  list.reverse();
  text = list.join('');

  return Number(text) * multiplier;
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
