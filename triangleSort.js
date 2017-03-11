var triangle = [9, 4, 1];
console.log(triangle);

triangle.sort();
console.log(triangle);

if (triangle[0] + triangle[1] > triangle[2]) {
  console.log("OK");
} else {
  console.log("NOT OK");
}

