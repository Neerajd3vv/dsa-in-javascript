function unionSortedArrays(a, b) {
  // step 1. initilise two pointers
  // both we giving 0 we triverse the array from left to right, and put each unique values we find to "union array"
  let pointerOne = 0;
  let pointerTwo = 0;

  let union = [];
  while (pointerOne < a.length && pointerTwo < b.length) {
    // run the loop till both arrays still have elements to compare

    if (a[pointerOne] < b[pointerTwo]) {
      // so we add it to union if not already added
      if (union[union.length - 1] !== a[pointerOne]) union.push(a[pointerOne]);
      pointerOne++;
    } else if (a[pointerOne] > b[pointerTwo]) {
      // so we add it to union if not already added
      if (union[union.length - 1] !== b[pointerTwo]) union.push(b[pointerTwo]);
      pointerTwo++;
    } else {
      //  if the value equal add once
      if (union[union.length - 1] !== a[pointerOne]) union.push(a[pointerOne]);
      pointerOne++;
      pointerTwo++;
    }
  }

  while (pointerOne < a.length) {
    if (union[union.length - 1] !== a[pointerOne]) union.push(a[pointerOne]);
    pointerOne++;
  }
  while (pointerTwo < b.length) {
    if (union[union.length - 1] !== b[pointerTwo]) union.push(b[pointerTwo]);
    pointerTwo++;
  }

  return union;
}

console.log(unionSortedArrays([1, 2, 2, 4, 5, 6], [0, 3, 4, 5, 5, 7]));
