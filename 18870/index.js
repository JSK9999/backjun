const fs = require("fs");
const filePath = process.platform === "linux" ? "dev/stdin" : "18870/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const arr = input[1].split(" ").map(Number);

// nlogn
const set = new Set(arr);
const uniqueArr = [...set];
const sortArr = uniqueArr.sort((a, b) => a - b); 


// nlogn
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
};

let answer = arr.map(value => binarySearch(sortArr, value)).join(" ");
console.log(answer);