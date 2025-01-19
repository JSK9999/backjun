const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const arr = input[0].split(' ').map(Number);

arr.sort(function(a,b) {
    return a-b;
})

let answer = "";
for (let ix =0; ix < arr.length; ix++) {
    answer += arr[ix] + " ";
}

console.log(answer);