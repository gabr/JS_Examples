function listSum(l) {
  var sum = 0;

  l.forEach((e) => { sum += e; });

  return sum;
}

function listAverage(l) {
  return listSum(l)/l.length;
}

var list = [-100, -17, 0, 1, 2, 3, 4, 5, 6, 7]
console.log(list);

console.log("Elements count = " + list.length);
console.log("Elements sum = " + listSum(list));
console.log("Elements average = " + listAverage(list));

