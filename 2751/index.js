const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "2751/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input.map(Number).slice(1);

arr.sort((a, b) => a - b);

let answer = "";
for (let ix = 0; ix < arr.length; ix++) {
  if (ix === arr.length - 1) {
    answer += arr[ix];
  } else {
    answer += arr[ix] + "\n";
  }
}
console.log(answer);