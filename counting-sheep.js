
// Pre Code
//  -----------------------
// What is the input to the program?
//    input: a number of sheep

// What is the output of the program?
//    output: returns the number of sheep along with console log
//    "Another sheep jumps over the fence"
//    and finally "All sheep jumped over the fence"

// What is the input to each recursive call?
//    input: the number of sheep after subtracting 1

// What is the output of each recursive call?
//    output: the new number of sheep

function sheepJump(numSheep) {
  if (numSheep === 0) {
    console.log('All sheep jumped over the fence.');
    return numSheep;
  }

  console.log(`${numSheep}: Another sheep jumps over the fence!`);
  return sheepJump(numSheep - 1);
}

sheepJump(5);

