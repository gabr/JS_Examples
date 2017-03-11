function factorial(n) {
  console.log("factorial(" + n + ")");

  if (n <= 1) return 1;

  return n * factorial(n - 1);
}


for (var i = 0; i < 4; i++) {
  console.log(i + "! = " + factorial(i));
  console.log();
}

