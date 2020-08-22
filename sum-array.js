// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function (array) {
  if (array.length === 0)
    return 0;

  return array[0] + sum(array.slice(1));
};

console.log(sum([1, 2, 3, 4, 5, 6]));