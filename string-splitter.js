// Pre Code
//  -----------------------
// What is the input to the program?
//    input: a string and a separator character

// What is the output of the program?
//    output: an array of strings 

// What is the input to each recursive call?
//    input: an array

// What is the output of each recursive call?
//    output: an array of words

function stringSplitter(str, separator) {
  if (str === '') {
    return '';
  }

  let subStr = '';
  let remaining = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== separator)
      subStr += str[i];
    else {
      remaining = str.slice(i + 1, str.length);
      break;
    }
  }

  return [subStr, ...stringSplitter(remaining, separator)];
}

console.log(stringSplitter('tell me a story about a story about recursion...', ' '));