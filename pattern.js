// +++++++++++++++++++++++++ PATTERN 1 +++++++++++++++++++++++++

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

for (i = 1; i <= 5; i++) {
  let row = "";
  for (j = 1; j <= 5; j++) {
    row += "* ";
  }
  console.log(row);
}

// +++++++++++++++++++++++++ PATTERN 2 +++++++++++++++++++++++++

// *
// **
// ***
// ****
// *****

for (i = 1; i <= 5; i++) {
  let row = "";
  for (j = 0; j < i; j++) {
    row += "* ";
  }
  console.log(row);
}

// +++++++++++++++++++++++++ PATTERN 3 +++++++++++++++++++++++++

// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for (let index = 1; index <= 5; index++) {
  let row = "";
  for (j = 1; j <= index; j++) {
    row += `${j}`;
  }
  console.log(row);
}

// +++++++++++++++++++++++++ PATTERN 4 +++++++++++++++++++++++++

// *****
// ****
// ***
// **
// *

// My first try solution

// for (i = 0; i < 5; i++) {
//   let row = "";
//   for (let j = 0; j < 5 - i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// then , i realised that count of starts going down , We should loop in the same pattern

for (let i = 5; i > 0; i--) {
  let row = "";
  for (let j = 0; j < i; j++) {
    row += "* ";
  }
  console.log(row);
}

// +++++++++++++++++++++++++ PATTERN 5 +++++++++++++++++++++++++

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// Mine version.

// for (let i = 0; i < 9; i++) {
//   let row = "";
//   if (i < 5) {
//     for (let j = 0; j <= i; j++) {
//       row += "* ";
//     }
//   } else {
//     for (let j = 0; j < 9 - i; j++) {
//       row += "* ";
//     }
//   }
//   console.log(row);
// }

// Optimised one , Calculate the no of start up front

for (let i = 0; i < 9; i++) {
  let row = "";
  let stars = i < 5 ? i + 1 : 9 - i;
  for (let j = 0; j < stars; j++) {
    row += "* ";
  }
  console.log(row);
}

// +++++++++++++++++++++++++ PATTERN 6 +++++++++++++++++++++++++

//     *
//    **
//   ***
//  ****
// *****

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5 - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += "*";
  }
  console.log(row);
}

// +++++++++++++++++++++++++ PATTERN 7 +++++++++++++++++++++++++

//  *****
//   ****
//    ***
//     **
//      *

for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j < i; j++) {
    row += " ";
  }

  for (let k = 0; k <= 5 - i; k++) {
    row += "*";
  }
  console.log(row);
}

// +++++++++++++++++++++++++ PATTERN 8 +++++++++++++++++++++++++

//     *
//    ***
//   *****
//  *******
// *********

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5 - i; j++) {
    row += " ";
  }
  for (let p = 1; p <= 2 * i - 1; p++) {
    // double the current index like 2 will become 4 and - 1 = 3 for second iteration , Now 3 star will get print, this is the pattern here.
    row += "*";
  }
  console.log(row);
}

// +++++++++++++++++++++++++ PATTERN 9 +++++++++++++++++++++++++

// *********
//  *******
//   *****
//    ***
//     *

// se this problem as this one  //  you just need to print some extra * on each line , the pattern will immerge if you could do that , Logic is similar to below pattern

//  *****
//   ****
//    ***
//     **
//      *

for (let i = 5; i > 0; i--) {
  // Listen to your gut , try whatever there is in your head, before seeing the answer..
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row += " ";
  }
  for (let p = 1; p <= 2 * i - 1; p++) {
    row += "*";
  }
  console.log(row);
}

// +++++++++++++++++++++++++ PATTERN 10 +++++++++++++++++++++++++

//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

// MINE VERSION

// const start = Date.now();
// for (i = 1; i <= 5; i++) {
//   let row = "";
//   for (let j = 0; j < 5 - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) { // NO need more iteratation and then condition to show " " for even and odd ke liye "*" , Why i even do that ?? Maybe im dumb , We all are :)
//     row += k % 2 !== 0 ? "*" : " ";
//   }
//   console.log(row);
// }
// const endTime = Date.now();
// console.log("Time Taken:", endTime - start, "ms");

// OPTIMISED VERSION

for (i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += "*";
    if (k < i) {
      row += " ";
    }
  }
  console.log(row);
}

// +++++++++++++++++++++++++ PATTERN 11 +++++++++++++++++++++++++

//  * * * * *
//   * * * *
//    * * *
//     * *
//      *

// MINE VERSION , Same mistake as in above

// for (let i = 5; i > 0; i--) {
//   let row = "";
//   for (let j = 0; j < 5 - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     k % 2 !== 0 ? (row += "*") : (row += " ");
//   }
//   console.log(row);
// }

// OPTIMISED VERSION

for (i = 5; i > 0; i--) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += "*";
    if (k < i) {
      row += " ";
    }
  }
  console.log(row);
}

// +++++++++++++++++++++++++ PATTERN 12 +++++++++++++++++++++++++

//  * * * * *
//   * * * *
//    * * *
//     * *
//      *
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *

const rows = 5;

// upper part
for (let i = rows; i >= 1; i--) {
  let row = "";

  // Add leading spaces
  for (let s = 0; s < rows - i; s++) {
    row += " ";
  }

  // Add stars with spaces
  for (let j = 1; j <= i; j++) {
    row += "*";
    if (j < i) row += " ";
  }

  console.log(row);
}

// Lower part
for (let i = 1; i <= rows; i++) {
  let row = "";

  // Add leading spaces
  for (let s = 0; s < rows - i; s++) {
    row += " ";
  }

  // Add stars with spaces
  for (let j = 1; j <= i; j++) {
    row += "*";
    if (j < i) row += " ";
  }

  console.log(row);
}

// +++++++++++++++++++++++++ PATTERN 13 +++++++++++++++++++++++++ , Good pattern 1 *

//       *
//      * *
//     *   *
//    *     *
//   *********

// Pattern -> Basically handle the case where there where all start first, Remaining -> only on edge print * , " " in between

for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 1; j <= 5 - i; j++) {
    row += " ";
  }

  if (i === 1) {
    row += "*";
  } else if (i === 5) {
    for (let k = 0; k < 2 * i - 1; k++) {
      row += "*";
    }
  } else {
    row += "*";
    for (let l = 0; l < 2 * i - 1 - 2; l++) {
      // As in each row there is 2 asteric , so the spaces equation becomes => (2 * i - 1) - 2
      row += " ";
    }
    row += "*";
  }

  console.log(row);
}

// +++++++++++++++++++++++++ PATTERN 14 +++++++++++++++++++++++++ , These were good questions Maza aya

//  *********
//   *     *
//    *   *
//     * *
//      *

for (let i = 5; i > 0; i--) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row += " ";
  }

  if (i === 5) {
    for (let k = 0; k < 2 * i - 1; k++) {
      row += "*";
    }
  } else if (i === 1) {
    row += "*";
  } else {
    row += "*";
    for (let l = 0; l < 2 * i - 3; l++) {
      row += " ";
    }
    row += "*";
  }
  console.log(row);
}

// +++++++++++++++++++++++++ PATTERN 15 +++++++++++++++++++++++++ , holo Kaju katli

//      *
//     * *
//    *   *
//   *     *
//  *       *
//   *     *
//    *   *
//     * *
//      *

// upper
for (let i = 1; i <= 5; i++) {
  let row = "";

  for (let j = 0; j < 5 - i; j++) {
    row += " ";
  }

  if (i === 1) {
    row += "*";
  } else {
    row += "*";
    for (let k = 0; k < 2 * i - 3; k++) {
      row += " ";
    }
    row += "*";
  }
  console.log(row);
}

// lower
for (let i = 4; i > 0; i--) {
  let row = "";

  for (let j = 0; j < 5 - i; j++) {
    row += " ";
  }

  if (i === 1) {
    row += "*";
  } else {
    row += "*";
    for (let k = 0; k < 2 * i - 3; k++) {
      row += " ";
    }
    row += "*";
  }
  console.log(row);
}
