function unionSortedArrays(A, B) {
  const union = [];
  let i = 0,
    j = 0;

  while (i < A.length && j < B.length) {
    if (A[i] < B[j]) {
      if (union[union.length - 1] !== A[i]) union.push(A[i]);
      i++;
    } else if (A[i] > B[j]) {
      if (union[union.length - 1] !== B[j]) union.push(B[j]);
      j++;
    } else {
      if (union[union.length - 1] !== A[i]) union.push(A[i]);
      i++;
      j++;
    }
  }

  while (i < A.length) {
    if (union[union.length - 1] !== A[i]) union.push(A[i]);
    i++;
  }

  while (j < B.length) {
    if (union[union.length - 1] !== B[j]) union.push(B[j]);
    j++;
  }

  return union;
}
console.log(unionSortedArrays([1, 2, 4, 5, 6], [2, 3, 5, 7]));
