
// Pre Code
//  -----------------------
// What is the input to the program?
//    input: an array and value

// What is the output of the program?
//    output: the number of times the value occurs in the array

// What is the input to each recursive call?
//    input: either 0 or 1 depending on whether the next val in the array matches the input val 
//    plus function passing in the array minus the first element and the value

// What is the output of each recursive call?
//    output: the product of the above equation


function numOccurencesRecursive(arr, val) {
  if (!arr.length) return 0;
  return (arr[0] === val) + numOccurencesRecursive(arr.slice(1), val);
}