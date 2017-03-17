function digSum(value) {
  var sum,
      tmp,
      dig;

  /*
  for (sum = 0; value !== 0; sum += dig) {
    dig = value % 10;
    tmp = value / 10;
    value = tmp - (dig/10);
  }
  */

  sum = 0;
  while (value !== 0) {
    dig = value % 10;
    tmp = value / 10;
    value = tmp - (dig/10);

    sum += dig;
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

