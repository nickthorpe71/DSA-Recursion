// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function (array) {
  let sum = 0;
  array.forEach(element => {
    if (Array.isArray(element)) {
      sum += arraySum(element);
    } else {
      sum += element;
    }
  });
  return sum;
};

console.log(arraySum([1, [2, 3], [[4]], 5]));