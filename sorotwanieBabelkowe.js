function sort(l) {
  for (var i = 0; i < l.length - 1; i++) {
    console.log(l + " i: " + i);

    if (l[i] > l[i + 1]) {
      var tmp = l[i];
      l[i] = l[i + 1];
      l[i + 1] = tmp;
      i = -1;
    }
  }

  return l;
}

var liczby = [17, 80, 1];

console.log("----");
liczby = sort(liczby);
console.log("----");

console.log(liczby);

