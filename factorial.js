// Pre Code
//  -----------------------
// What is the input to the program?
//    input: 

// What is the output of the program?
//    output: 

// What is the input to each recursive call?
//    input: 

// What is the output of each recursive call?
//    output: 


function findFact(n) {
  if (n === 1) {
    return 1;
  }

  return n * findFact(n - 1);
}

console.log(findFact(5));