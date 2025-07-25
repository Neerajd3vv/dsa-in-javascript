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
console.log();

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
console.log();

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
console.log();

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
console.log();

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
console.log();

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
console.log();

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
console.log();

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
console.log();

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
console.log();

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
console.log();

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
console.log();

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
console.log();

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
console.log();

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
console.log();

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

console.log();

// +++++++++++++++++++++++++ PATTERN 16 +++++++++++++++++++++++++ (Repeat Worthy)
// Loved this question learned something new , Pascal Triangle, I did not knew about it

//           1
//         1   1
//       1   2   1
//     1   3   3   1
//   1   4   6   4   1

function PrintPascalTriangle(n) {
  const Array2dTriangle = [];

  for (let i = 0; i < n; i++) {
    Array2dTriangle[i] = []; // creting arrays for each iteration in out main array

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        Array2dTriangle[i][j] = 1; // putting 1 to the edges of each element
      } else {
        Array2dTriangle[i][j] =
          Array2dTriangle[i - 1][j - 1] + Array2dTriangle[i - 1][j]; // the middle value is the some of two values direct above row , so this the formula
      }
    }
  }

  // Loop to print the elements of the 2D array , As out required pattern
  for (let k = 0; k < n; k++) {
    let space = " ".repeat(n - k - 1); // .repeat -> It repeats the string n no. of times.
    let pattern = Array2dTriangle[k].join(" "); // -> Joining so array -> converts to strings
    console.log(space + pattern);
  }
}

PrintPascalTriangle(5);
console.log();

// +++++++++++++++++++++++++ PATTERN 17 +++++++++++++++++++++++++

// Tip: Try to see patterns in the questions , Like in this

// p1 - Edges have value in increment
// p2 - the values in middle of each row is "Decreasing" till 1 and then "Increasing" from 2 - to -  <= i (current iteration count)

//      1
//     212
//    32123
//   4321234
//    32123
//     212
//      1

function filledKajuKatli(n) {
  // upper part

  for (let i = 1; i <= n; i++) {
    let row = "";
    row += " ".repeat(n - i);

    // Decrement // -> i to 1
    for (let j = i; j >= 1; j--) {
      row += j;
    }

    // Increment // -> 2 to i
    for (let k = 2; k <= i; k++) {
      row += k;
    }

    console.log(row);
  }

  // lower part from n-1 to 1

  for (let i = n - 1; i >= 1; i--) {
    let row = "";
    row += " ".repeat(n - i);

    // Decrement // -> i to 1
    for (let j = i; j >= 1; j--) {
      row += j;
    }

    // Increment // -> 2 to i
    for (let k = 2; k <= i; k++) {
      row += k;
    }
    console.log(row);
  }
}

filledKajuKatli(4);
console.log();

// +++++++++++++++++++++++++ PATTERN 18 +++++++++++++++++++++++++

//   **********
//   ****  ****
//   ***    ***
//   **      **
//   *        *
//   *        *
//   **      **
//   ***    ***
//   ****  ****
//   **********

function kajuKatliMold(n) {
  for (let i = 1; i <= n; i++) {
    let stars = "*".repeat(n - i + 1);
    let spaces = " ".repeat(2 * i - 2); // the pattern i notice is the gap is basically 2 table but one step forward so gotta remove -2
    console.log(stars + spaces + stars);
  }

  for (let i = n; i > 0; i--) {
    let stars = "*".repeat(n - i + 1);
    let spaces = " ".repeat(2 * i - 2);
    console.log(stars + spaces + stars);
  }
}

kajuKatliMold(5);
console.log();

// +++++++++++++++++++++++++ PATTERN 19 +++++++++++++++++++++++++

//    *        *
//    **      **
//    ***    ***
//    ****  ****
//    **********
//    ****  ****
//    ***    ***
//    **      **
//    *        *

function butterfly(n) {
  for (let i = n; i > 1; i--) {
    let star = "*".repeat(n - i + 1);
    let space = " ".repeat(2 * i - 2);
    console.log(star + space + star);
  }

  for (let i = 1; i <= n; i++) {
    let star = "*".repeat(n - i + 1);
    let space = " ".repeat(2 * i - 2);
    console.log(star + space + star);
  }
}

butterfly(5);
console.log();

// +++++++++++++++++++++++++ PATTERN 20 +++++++++++++++++++++++++ (Worth repeating)

//    ****
//    *  *
//    *  *
//    *  *
//    ****

function standupRectangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 0; j < n - 1; j++) {
      // this is better i was ealier handling the first and last case outside of this innner loop , via a conditional,  now we testing for that condition in the loop itself. i === 1 || i === n .
      if (i === 1 || i === n || (j === 0) | (j === n - 1 - 1)) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}

standupRectangle(5);
console.log();

// +++++++++++++++++++++++++ PATTERN 21 +++++++++++++++++++++++++

// Pattern -> A single number is getting increased for each iteration of innner loop

//  1
//  2  3
//  4  5  6
//  7  8  9  10
//  11 12 13 14 15

function printNumberTriangle(n) {
  let num = 1;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += num;
      row += " ";
      num++;
    }
    console.log(row);
  }
}

printNumberTriangle(5);
console.log();

// +++++++++++++++++++++++++ PATTERN 22 +++++++++++++++++++++++++ , Worthy retry

// pattern -> (i + j ) % 2 if even then -> "1" else "0"

//  1
//  0 1
//  1 0 1
//  0 1 0 1
//  1 0 1 0 1

function binaryRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
      row += ((i + j) % 2 === 0 ? 1 : 0) + " ";
    }

    console.log(row);
  }
}

binaryRightTriangle(5);
console.log();

// +++++++++++++++++++++++++ PATTERN 23 +++++++++++++++++++++++++

// 1 1 1 1 1 1
// 2 2 2 2 2
// 3 3 3 3
// 4 4 4
// 5 5
// 6

let num = 1;
for (let i = 6; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    if (j === i) {
      row += num;
      num++;
    } else {
      row += num + " ";
    }
  }
  console.log(row);
}
console.log();

// +++++++++++++++++++++++++ PATTERN 24 +++++++++++++++++++++++++

//      *
//     * *
//    * * *
//   * * * *
//  * * * * *
//   * * * *
//    * * *
//     * *
//      *

function diamond(n) {
  // upper
  for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
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

  // lower
  for (let i = n - 1; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
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
}

diamond(5);
console.log();

// +++++++++++++++++++++++++ PATTERN 25 +++++++++++++++++++++++++

//  *        *
//  **      **
//  ***    ***
//  ****  ****
//  **********
//  ****  ****
//  ***    ***
//  **      **
//  *        *

function starWarShip(n) {
  for (let i = n; i > 1; i--) {
    let star = "*".repeat(n - i + 1);
    let space = " ".repeat(2 * i - 2);
    console.log(star + space + star);
  }

  for (let i = 1; i <= n; i++) {
    let star = "*".repeat(n - i + 1);
    let space = " ".repeat(2 * i - 2);
    console.log(star + space + star);
  }
}

starWarShip(5);
console.log();

// +++++++++++++++++++++++++ PATTERN 26 +++++++++++++++++++++++++
//         1
//       2 1 2
//     3 2 1 2 3
//   4 3 2 1 2 3 4
// 5 4 3 2 1 2 3 4 5

function numberPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    row += "  ".repeat(n - i);

    // Left (descending part)
    for (let j = i; j >= 1; j--) {
      row += j + " ";
    }

    // Right (ascending part)
    for (let j = 2; j <= i; j++) {
      row += j + " ";
    }

    console.log(row);
  }
}

numberPyramid(5);
console.log();

// +++++++++++++++++++++++++ PATTERN 27 +++++++++++++++++++++++++  , Worth repeating **

// pattern -> Need to find the min distance from the edge for the each cell, then n - min

//  4 4 4 4 4 4 4
//  4 3 3 3 3 3 4
//  4 3 2 2 2 3 4
//  4 3 2 1 2 3 4
//  4 3 2 2 2 3 4
//  4 3 3 3 3 3 4
//  4 4 4 4 4 4 4

function tesseract(n) {
  let total = n * 2 - 1;
  for (let i = 1; i <= total; i++) {
    let row = "";

    for (let j = 1; j <= total; j++) {
      // Min distance from the edge for each cell
      let top = i - 1;
      let bottom = total - i;
      let left = j - 1;
      let right = total - j;
      let min = Math.min(top, bottom, left, right);

      row += n - min + " ";
    }
    console.log(row);
  }
}

tesseract(4);
console.log();

// +++++++++++++++++++++++++ PATTERN 28 +++++++++++++++++++++++++

//  E
//  D E
//  C D E
//  B C D E
//  A B C D E

const alphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function alphabetRightAngle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = i; j >= 1; j--) {
      row += alphabets[n - j].toUpperCase() + " ";
    }
    console.log(row);
  }
}

alphabetRightAngle(5);
console.log();

// +++++++++++++++++++++++++ PATTERN 29 +++++++++++++++++++++++++

// pattern -> after each inner iteration the index increases and for the next iteration starts from the last updated index, Similar pattern we saw in , Pattern 21

//  a
//  B c
//  D e F
//  g H i J
//  k L m N o

function alphabetRightAngleAlt(n) {
  let index = 0;
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row +=
        index % 2 === 0
          ? alphabets[index] + " "
          : alphabets[index].toUpperCase() + " ";
      index++;
    }
    console.log(row);
  }
}

alphabetRightAngleAlt(5);
console.log();

// +++++++++++++++++++++++++ PATTERN 30 +++++++++++++++++++++++++

//  E D C B A
//  D C B A
//  C B A
//  B A
//  A

function alphabetRightAngleDecline(n) {
  for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = i; j >= 1; j--) {
      row += alphabets[j - 1].toUpperCase() + " ";
    }
    console.log(row);
  }
}

alphabetRightAngleDecline(5);
console.log();

// +++++++++++++++++++++++++ PATTERN 31 +++++++++++++++++++++++++
// Pattern -> increment , decrement

//  1      1
//  12    21
//  123  321
//  12344321

function unknownn(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";

    // increment
    for (let j = 1; j <= i; j++) {
      row += j;
    }

    // spaces
    for (let k = 1; k <= (n - i) * 2; k++) {
      row += " ";
    }

    // decrease
    for (let l = i; l >= 1; l--) {
      row += l;
    }

    console.log(row);
  }
}

unknownn(4);
console.log();

// +++++++++++++++++++++++++ PATTERN 32 +++++++++++++++++++++++++

//     ****
//    *  *
//   *  *
//  *  *
// ****

function invertedStandRectangle(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    row += " ".repeat(n - i);
    for (let j = 1; j <= n - 1; j++) {
      if (i === 1 || i === n || j === 1 || j === n - 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
}
invertedStandRectangle(5);

console.log();
