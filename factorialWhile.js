function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  var w = 1;
  while (n > 1) {
    w = w * n; // w *= n;
    n = n - 1; // --n;
  }

  return w;
}


for (var i = 0; i < 10; i++) {
  console.log(i + "! = " + factorial(i));
}

