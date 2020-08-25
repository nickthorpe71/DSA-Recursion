// 4. Check if a number is even.
var isEven = function (n) {
  if (n === 0)
    return true;
  else if (n === 1)
    return false;

  return isEven(n - 2);
};

console.log(isEven(4));