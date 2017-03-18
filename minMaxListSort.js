function maxList(l) {
  l.sort((a, b) => b - a);
  return l[0];
}

function minList(l) {
  l.sort((a, b) => a - b);
  return l[0];
}

var list = [-1, -17, 0, 1, 2, 200, 3, 4, 5, 6, 7]
console.log(list);

console.log("Elements count = " + list.length);
console.log("Max = " + maxList(list));
console.log("Min = " + minList(list));

