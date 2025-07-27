// Q2. Second largest element in an Array

// With using sorting..

let nums = [-7, -2, -4, -4, 2, -2];
let sortedArray = [...new Set(nums)].sort((a, b) => b - a);
// console.log(sortedArray);
// console.log(sortedArray[0]);
// console.log(sortedArray[1]);

// Without use of sorting..let nums = [-7, -2, -4];

// let nums = [8, 8, 7, 6, 5];

let largest = -Infinity;
let secondLargest = -Infinity;

if (nums.length < 2) return null;

for (let num of nums) {
  if (num > largest) {
    secondLargest = largest;
    largest = num;
  } else if (num > secondLargest && num < largest) {
    secondLargest = num;
  }
}

console.log(secondLargest === -Infinity ? -1 : secondLargest);
