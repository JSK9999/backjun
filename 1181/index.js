const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "1181/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n").map((el) => el.split(" ").map(String));

// 중복 제거
let setArr = new Set(input.map((el) => el.join(" "))); 
const uniqueArr = [...setArr].map((el) => el.split(" "));


// 길이 같으면 사전순 대문자 먼저
const arr = uniqueArr.slice(1).sort((a, b) => {
  if (a[0].length === b[0].length) {
    return a[0].localeCompare(b[0]);
  } else {
    return a[0].length - b[0].length;
  }
}
);

let answer = "";
for (let ix = 0; ix < arr.length; ix++) {
  answer += arr[ix].join(" ") + "\n";
}
console.log(answer);