var fs = require('fs');
fs.readFile('./song1.txt', { encoding: 'utf8' }, function (errs, data) {
    console.log(data);
});
console.log('start');
console.log('end');
