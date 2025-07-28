// Rotate Array
// I was doing this ealier , but leetcode want to changes the nums itself not to create new array

// function rotateArrayRight(nums, k) {
//   const n = nums.length;
//   const rotationCount = k % n;
//   return nums.slice(-rotationCount).concat(nums.slice(0, n - rotationCount));

// }

function rotateArrayRight(nums, k) {
  const n = nums.length;
  const rotationCount = k % n;
  const rotated = nums
    .slice(-rotationCount)
    .concat(nums.slice(0, n - rotationCount));

  for (let i = 0; i < n; i++) {
    nums[i] = rotated[i];
  }
  return nums;
}

console.log(rotateArrayRight([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArrayRight([-1, -100, 3, 99], 10));
