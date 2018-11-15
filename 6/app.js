var readLineSync = require("readline-sync");
var name = readLineSync.question("What is your name? ");
console.log("Your name is ", name);
var age = parseInt(readLineSync.question("How old are you? "));
console.log("you are " + age + " year old");
var tall= parseFloat(readLineSync.question('How tall are you? '));
console.log("you are " + tall + " m");
var person={
    name: name,
    age: age,
    tall:tall
};
console.log(person);
var objtostr=JSON.stringify(person);
console.log(objtostr);
var strtoobj=JSON.parse(objtostr);
console.log(strtoobj);