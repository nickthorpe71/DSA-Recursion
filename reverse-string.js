// Pre Code
//  -----------------------
// What is the input to the program?
//    input: a string

// What is the output of the program?
//    output: the inpur string reversed

// What is the input to each recursive call?
//    input: the current string minus the last letter

// What is the output of each recursive call?
//    output: the last letter of the input string



function reverseStr(str) {
  if (str === '')
    return '';

  const current = str.length - 1;
  return str[current] + reverseStr(str.slice(0, current));
}

console.log(reverseStr('a long sentance that needs to be reversed'));