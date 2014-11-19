var x = process.argv[2];
var i = 0;
var emptystring = '';

while (i < x.length) {
  var n = x.charAt(i);
  if (n === "a" || n === "e" || n === "i" || n === "o" || n === "u") {
    console.log(n);
    emptystring += (x[i])
  }
  i++;
}
console.log(emptystring);
