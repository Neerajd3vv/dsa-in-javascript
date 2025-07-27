// Rotate Array

function rotateArrayRight(nums, k) {
  const n = nums.length;

  return nums.slice(-k).concat(nums.slice(0, n - k));
}

console.log(rotateArrayRight([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateArrayRight([-1, -100, 3, 99], 2));
