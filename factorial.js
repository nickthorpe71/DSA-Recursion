// Pre Code
//  -----------------------
// What is the input to the program?
//    input: a number

// What is the output of the program?
//    output: the factorial of the input number

// What is the input to each recursive call?
//    input: the input number multiplied by the factorial of the number 1 less than itself

// What is the output of each recursive call?
//    output: the factorial of the input number


function findFact(n) {
  if (n === 1) {
    return 1;
  }

  return n * findFact(n - 1);
}

console.log(findFact(5));