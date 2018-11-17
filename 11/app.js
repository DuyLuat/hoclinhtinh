// var fs = require('promise-fs');

// function onDone(data) {
//     console.log(data);
// }
// function readFile(path) {
//     return fs.readFile(path, { encoding: 'utf8' });
// }

// readFile('song1.txt')
//     .then(onDone)
//     .then(function () { return readFile('song2.txt') })
//     .then(onDone)
//     .then(function () { return readFile('song3.txt') })
//     .then(onDone)
//     .catch(err);

// fs.readFile('song1.txt', { encoding: 'utf8' })
//     .then(function (data) {
//         console.log(data);
//     })
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

var fs = require('fs');
function readFilePromise(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, { encoding: 'utf8' }, function (err, data) {
            if (err) { reject(err); }
            else {
                resolve(data);
            }
        });
    });
}
readFilePromise('song11.txt')
    .then(function (data) {
        console.log(data)
    })
    .catch(function (err) {
        console.log(err)
    });