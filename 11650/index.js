const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "11650/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map((el) => el.split(" ").map(Number));

const arr = input.slice(1).sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
}
);

let answer = "";
for (let ix = 0; ix < arr.length; ix++) {
  answer += arr[ix].join(" ") + "\n";
}
console.log(answer);