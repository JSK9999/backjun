const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "11047/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');


const coins = input.slice(1).map(Number).sort((a, b) => b - a);

let answer = 0;
let target = input[0].split(' ').map(Number)[1];

for (let ix = 0; ix < coins.length; ix++) {
  if (target === 0) {
    break;
  }
  if (target >= coins[ix]) {
    answer += Math.floor(target / coins[ix]);
    target %= coins[ix];
  }
}
console.log(answer)