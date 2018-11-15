var Mouse1=require('./mouse');
var Cat1=require('./cat');

var Mickey = new Mouse1("black");
var Jerry = new Mouse1("yellow");

console.log('Mickey: ',Mickey);
console.log('Jerry:',Jerry);

var Tom = new Cat1();
console.log('Tom: ', Tom);
Tom.eat(Jerry);
Tom.eat(Mickey);
console.log('Jerry:', Jerry);
console.log('Tom: ', Tom);