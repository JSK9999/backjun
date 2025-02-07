const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "11399/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input[1].split(" ").map(Number);

const sortArr = arr.sort((a, b) => a - b);

let answer = 0;
let time = 0;

for (let ix = 0; ix < sortArr.length; ix++) {
  time += sortArr[ix];
  answer += time;
}
console.log(answer);