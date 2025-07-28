// My brute force cooked this , try to make as few as few variables possible

// function moveZeros(nums) {
//   let zeroCount = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 0) {
//       zeroCount++;
//     }
//   }

//   const filtered = nums.filter((item) => item !== 0);

//   const final = filtered.concat(new Array(zeroCount).fill(0));

//   for (let j = 0; j < nums.length; j++) {
//     nums[j] = final[j];
//   }
//   return nums;
// }

// Better solution
function moveZeros(nums) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[k] = nums[i];
      k++;
    }
  }

  console.log("nums", nums);

  while (k < nums.length) {
    nums[k] = 0;
    k++;
  }
  return nums;
}
console.log(moveZeros([0, 1, 0, 0, 3, 0, 4, 0, 5, 6, 0]));
