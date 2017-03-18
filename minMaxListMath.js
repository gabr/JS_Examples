function maxList(l) {
  return Math.max(...l);
}

function minList(l) {
  return Math.min(...l);
}

var list = [-1, -17, 0, 1, 2, 200, 3, 4, 5, 6, 7]
console.log(list);

console.log("Elements count = " + list.length);
console.log("Max = " + maxList(list));
console.log("Min = " + minList(list));

