var l1 = 17;
var l2 = 80;
var l3 = 1;

if (l1 < l2 && l2 < l3) {
  console.log(l1);
  console.log(l2);
  console.log(l3);
} else if (l1 < l2 && l3 < l2 && l1 < l3) {
  console.log(l1);
  console.log(l3);
  console.log(l2);
} else if (l3 < l1 && l3 < l2 && l1 < l2) {
  console.log(l3);
  console.log(l1);
  console.log(l2);
}

// l1 l2 l3
// l1 l3 l2
// l2 l1 l3
// l2 l3 l1
// l3 l1 l2
// l3 l2 l1


