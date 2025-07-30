// let n = 5;
let nums = [1, 2, 4, 5];

let firstNnaturalNumberSum = ((nums.length + 1) * (nums.length + 2)) / 2;
let actualSum = nums.reduce((acc, cv) => acc + cv, 0);

console.log(`The missing number is ${firstNnaturalNumberSum - actualSum}`);
