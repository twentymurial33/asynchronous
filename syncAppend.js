//file module 
var fs =require("fs");

var textFile=process.argv[0];
var number=0;

fs.readFile(textFile,"utf8",function(err,data){
  if (err){
     return console.log(err);
  }
})

console.log(number);
var secondNumber = 0;

number = 5;
secondNumber = 2;
fs.appendFileSync("written.txt", "Hello Kitty")
    console.log("SAVED");

console.log(secondNumber);

console.log("number", number);


