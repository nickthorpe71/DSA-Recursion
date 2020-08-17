// Pre Code
//  -----------------------
// What is the input to the program?
//    input: a number

// What is the output of the program?
//    output: the triangular number that has rows equal to the input number

// What is the input to each recursive call?
//    input: the number of rows - 1

// What is the output of each recursive call?
//    output: the current start of the triangular number

function nthTriangularNumber(rows) {
  if (rows === 1) {
    return rows;
  }

  return rows + nthTriangularNumber(rows - 1);
}

console.log(nthTriangularNumber(9));