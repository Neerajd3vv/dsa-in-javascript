// Q1.largest element in an Array;

let nums = [0, 2, 3, 6, 3, -7, 5, 9];

let largest = nums[0];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > largest) {
    largest = nums[i];
  }
}
console.log(largest);
