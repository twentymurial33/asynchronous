
var fs = require("fs");

var textFile = process.argv[0];
var number = 0;

fs.readFile(textFile, "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }
  var secondNumber = 0;
  
  fs.appendFile("written.txt", "Hello Kitty", function(err) {
    
    if (err) {
      return console.log(err);
    }
    number = 5;
    secondNumber = 2;
    
    console.log(number);

    console.log("SAVED");

  });
  
  console.log(secondNumber);
});

console.log(number);
