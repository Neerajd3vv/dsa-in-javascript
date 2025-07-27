// Q3. Check if the array is sorted and rotated. (ascending / Increasing / Non-decreasing) order or not.

// logic -> roated means -> [3,4,5,1,2] => roted from n =3, So in rotation atmost once any element in the array would be >= to the next one , So only 1 such break is allowed at max

function checkRotatedSorted(nums) {
  let breakCount = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      breakCount++;
    }
  }

  if (nums[nums.length - 1] > nums[0]) breakCount++;

  return breakCount <= 1;
}

console.log(checkRotatedSorted([3, 4, 5, 1, 2]));
