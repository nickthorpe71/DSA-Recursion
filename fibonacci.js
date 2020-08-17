// Pre Code
//  -----------------------
// What is the input to the program?
//    input: the number we are printing the fibonacci sequence for

// What is the output of the program?
//    output: the final number in the sequence and a console log for each number

// What is the input to each recursive call?
//    input: the previous number in the sequence

// What is the output of each recursive call?
//    output: the next number in the sequence


function fibonacci(n) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7));
