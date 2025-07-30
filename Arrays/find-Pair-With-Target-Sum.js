// we gonna user two pointer as its saves time by not doing nested looping , 

const nums = [1, 2, 3, 4, 6];
const target = 3;

// step 1 . Initialize two pointers

let pointLeft = 0  // ->  will move this pointer from left to right
let pointRight = nums.length - 1 // -> will move this pointer from right to left


while (pointLeft < pointRight) {

    const sum = nums[pointLeft] + nums[pointRight]

    if (sum === target) {
        console.log(`Pair found: ${nums[pointLeft]}, ${nums[pointRight]}`);
        break;
    } else if (sum < target) {  // Sum too small, move left pointer right to get bigger number
        pointLeft++
    } else {
        pointRight-- // Sum too big, move right pointer left to get smaller number
    }

}
