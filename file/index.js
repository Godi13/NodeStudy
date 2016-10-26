const fs = require('fs');

// 异步
fs.readFile('input.txt', (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data.toString());
})

console.log("message");

// 同步
// var data = fs.readFileSync('input.txt');
//
// console.log(data.toString());
//
// console.log("message");
