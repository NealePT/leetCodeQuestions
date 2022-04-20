const roman = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
const romanToInt = function(s) {
  let sum = 0;
  for (let i = s.length - 1; ~i; i--) {
    let num = roman[s.charAt(i)];
    if (4 * num < sum) {
      sum -= num;
    } else {
      sum += num;
    }
  }
  return sum;
};

// Test
console.log(romanToInt('VI'));
console.log(romanToInt('MCMXCIV'));