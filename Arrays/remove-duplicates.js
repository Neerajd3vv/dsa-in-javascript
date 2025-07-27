// Q4. Remove duplicates from sorted array

function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let k = 1;

  for (i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

console.log(removeDuplicates([0, 0, 1, 1, 2, 3, 4, 4]));
