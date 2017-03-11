function whatChar(c) {
  var number = c.charCodeAt(0);
  console.log("Podany znak '" + c + "' ma wartość: " + number);

  if (number >= "A".charCodeAt(0) && number <= "Z".charCodeAt(0)) {
    console.log("Podano wielką literę");
  } else if (number >= "a".charCodeAt(0) && number <= "z".charCodeAt(0)) {
    console.log("Podano małą literę");
  } else if (number >= "0".charCodeAt(0) && number <= "9".charCodeAt(0)) {
    console.log("Podano cyfrę");
  } else {
    console.log("Nieznany znak");
  }
}


whatChar("t"); console.log();
whatChar("U"); console.log();
whatChar("2"); console.log();
whatChar("{"); console.log();

