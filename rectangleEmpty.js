var height = 5,
    width  = 9;

for (var h = 0; h < height; h++) {

  var line = "";
  if (h == 0 || h == height - 1) {
    for (var w = 0; w < width; w++) {
      line += "X";
    }
  } else {
    for (var w = 0; w < width; w++) {
      if (w == 0 || w == width - 1) {
        line += "X";
      } else {
        line += " ";
      }
    }
  }

  console.log(line);
}


