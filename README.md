# backjun

# 입력값 1줄일떄

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "문제번호/input.txt";
const input = fs.readFileSync(filePath).toString().split(" ");

# 입력값 여러줄일때

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "문제번호/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

# 입력 값의 첫 줄과 나머지 줄이 각각 다른 것을 의미할 때

const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "문제번호/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const inputN = Number(input[0]); // 숫자 1개
const inputLine = [];
for (let i = 1; i < input.length; i++) {
inputLine.push(input[i].toString().trim().split(" ").map(v => Number(v)));
}  // 2차원배열
