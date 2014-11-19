var x = parseInt(process.argv[2]);

if ((x < 10000000000) && (x > 1000000000)) {
  console.log("valid");
}
else {
  console.log("invalid");
}
