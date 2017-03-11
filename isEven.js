function isEven(x) {
  return x%2 === 0;
}

var number = 19;


/*
console.log(number);
console.log(number/2);
console.log(number%2);
*/

if (isEven(number)) {
  console.log("Liczba " + number + " jest parzysta");
} else {
  console.log("Liczba " + number + " jest nieparzysta");
}
