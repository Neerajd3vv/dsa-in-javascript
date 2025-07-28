function linearSearch(nums, k) {
  let index = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) {
      index.push(i);
    }
  }
  return index.length > 0 ? index : -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 3], 9));
