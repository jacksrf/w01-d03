var x = process.argv[2];
var i = 0;

while (i < x.length) {
  var n = x.charAt(i);
    if (n === "a" || n === "e" || n === "i" || n === "o" || n === "u") {
      console.log(n);
    }
  i++;
}
