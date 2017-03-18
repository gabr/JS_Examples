function maxList(l) {
  var max = l[0];

  if (l.length === 1)
    return l[0];
  else if (l.length === 2)
    return l[0] > l[1] ? l[0] : l[1];


  for (var i = 1; i < l.length; i++) {
    if (l[i] > max) {
      max = l[i];
    }
  }

  return max;
}

function minList(l) {
  var min = l[0];

  if (l.length === 1)
    return l[0];
  else if (l.length === 2)
    return l[0] < l[1] ? l[0] : l[1];

  for (var i = 1; i < l.length; i++) {
    if (l[i] < min) {
      min = l[i];
    }
  }

  return min;
}

var list = [-1, -17, 0, 1, 2, 200, 3, 4, 5, 6, 7]
console.log(list);

console.log("Elements count = " + list.length);
console.log("Max = " + maxList(list));
console.log("Min = " + minList(list));

