// Pre Code
//  -----------------------
// What is the input to the program?
//    input: base int and exponent

// What is the output of the program?
//    output: the value of the base raised to the power of the exponent
//    OR if exponent is not positive "exponent should be >= 0"

// What is the input to each recursive call?
//    input: the base and the current exponent minus 1
//    

// What is the output of each recursive call?
//    output: the base multiplied by itself

function powerCalculator(base, exponent) {
  if (exponent < 0) {
    const errorMessage = 'error: exponent should be >= 0';
    return errorMessage;
  }

  if (exponent === 1) {
    return base;
  }

  return base * powerCalculator(base, exponent - 1);
}

console.log(powerCalculator(2, 3));