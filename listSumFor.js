function listSum(l) {
  var sum = 0;

  for (var i = 0; i < l.length; i++) {
    sum += l[i];
  }

  return sum;
}


var list = [-1, -17, 0, 1, 2, 3, 4, 5, 6, 7]
console.log(list);

console.log("Elements sum = " + listSum(list));

