// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function (n) {
  if (n === 0)
    return 0;

  return n + sumBelow(n - 1) - 1;
};

console.log(sumBelow(7));