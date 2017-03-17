function digSum(value) {
  var sum = 0,
      text = String(value);

  for (var i = 0; i < text.length; i++) {
    sum += Number(text[i]);
  }

  return sum;
}

var x;

x = 7;
console.log(x + " -> " + digSum(x));

x = 123;
console.log(x + " -> " + digSum(x));

x = 120804;
console.log(x + " -> " + digSum(x));

x = 0;
console.log(x + " -> " + digSum(x));

