// Pre Code
//  -----------------------
// What is the input to the program?
//    input: a decimal number

// What is the output of the program?
//    output: the binary version of the input number

// What is the input to each recursive call?
//    input: the lease signifigant bit and the remaining bits

// What is the output of each recursive call?
//    output: a portion of the final binary number

/**
 * 8421
 * ----
 *    0     0
 *    1     1
 *   10     0 + 2 = 2
 *   11     1 + 2 = 3
 *  100     0 + 0 + 4 = 4
 *  101     1 + 0 + 4 = 5
 *  110     0 + 2 + 4 = 6
 *  111     1 + 2 + 4 = 7
 * 1000     0 + 0 + 0 + 8 = 8
 *
 * 2^0 = 1
 * 2^1 = 2
 * 2^2 = 4
 * 2^3 = 8
 */

function toBinary(x) {
  if (x < 0) {
    throw new Error('Negative numbers not acceptable');
  }
  if (x === 0 || x === 1) {
    return x.toString();
  }
  const lsb = (x % 2).toString();
  const remainingBits = Math.floor(x / 2);
  const remainingBitsInBinary = toBinary(remainingBits);
  return remainingBitsInBinary + lsb;
}

console.log(toBinary(10)); // 1010
console.log(toBinary(7)); // 111
console.log(toBinary(0)); // 0
console.log(toBinary(1)); // 1
console.log(toBinary(255));
console.log(toBinary(-1));