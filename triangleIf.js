var a = 9,
    b = 4,
    c = 5;

if (c > a && c > b) {
  if (a + b > c ) {
    console.log("OK");
  } else {
    console.log("NOT OK");
  }
} else if (b > a && b > c) {
  if (a + c > b) {
    console.log("OK");
  } else {
    console.log("NOT OK");
  }
} else {
  if (b + c > a) {
    console.log("OK");
  } else {
    console.log("NOT OK");
  }
}

