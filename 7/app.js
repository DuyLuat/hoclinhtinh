var readLineSync = require("readline-sync");
var fs = require("fs");
var students = [];

function showMenu() {
  console.log("1. Show all students");
  console.log("2. Create a new student");
  console.log("3. Save and exit");
  var option = readLineSync.question("> ");
  switch (option) {
    case "1":
      showAllStudents();
      break;
    case "2":
      createStudent();
      break;
    case "3":
      saveAndExit();
      break;
      default:
      console.log('Wrong option!, please enter new option');
      showMenu();
  }
}
function showAllStudents() {
  var i = 0;
  if (students.length > 0) {
    console.log("------------------");
    console.log("TT" + "\t" + "HO TEN" + "\t\t" + "TUOI");
    for (var student of students) {
      i++;
      console.log(i + "\t" + student.name + "\t" + student.age);
    }
    console.log("------------------");
  } else {
    console.log("Khong co hoc sinh nao trong danh sach.");
    console.log("------------------");
  }
  showMenu();
}
function loadData() {
  var fileContent = fs.readFileSync("./data.json", { charset: "utf8" });
  students = JSON.parse(fileContent);
}
function createStudent() {
  var name = readLineSync.question("Nhap ten sinh vien: ");
  var age = parseInt(readLineSync.question("Nhap tuoi sinh vien: "));
  students.push({ name: name, age: age });
  showMenu();
}
function saveAndExit() {
  var fileWriteContent = JSON.stringify(students);
  fs.writeFileSync("./data.json", fileWriteContent, {
    charset: "utf8"
  });
}

function main() {
  loadData();
  showMenu();
}
main();
