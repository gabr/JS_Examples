/*

*
**
***
****

    *
   ***
  *****
 *******
*********

*/

var height = 8;

for (var h = 0; h < height; h++) {
  var line = "";

  for (var s = 0; s < h + 1; s++) {
    line += "*";
  }

  console.log(line);
}
