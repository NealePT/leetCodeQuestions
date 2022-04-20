const twoSum = function(nums, target) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === target) {
          ans.push(i, j);
          return ans;
        }
      }
    }
  }
};

// Test

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));