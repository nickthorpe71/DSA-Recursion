// Pre Code
//  -----------------------
// What is the input to the program?
//    input: a string

// What is the output of the program?
//    output: an array of all anagrams of input string

// What is the input to each recursive call?
//    input: the remaining string that needs to be anagrammed 

// What is the output of each recursive call?
//    output: a list of input string's anagrams

function findAnagrams(string) {
  if (string.length < 2) return string; // This is our base case

  var permutations = [];
  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    // check duplicates:
    if (string.indexOf(char) != i) // if char was used already
      continue; // skip it this time

    var remainingString = string.slice(0, i) + string.slice(i + 1, string.length);

    for (var subPermutation of findAnagrams(remainingString))
      permutations.push(char + subPermutation);
  }
  return permutations;
}

console.log(findAnagrams('east'));