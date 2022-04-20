const isPalindrome = function(head) {
  let found = [];
  while (head) {
    found.push(head.val);
    head = head.next;
  }

  let left = 0;
  let right = found.length - 1;
  while (left <= right) {
    if (found[left] !== found[right]) {
      return false;
    }
    left++, right--;
  }
  return true;
};

// Test
console.log(isPalindrome([1, 2, 2, 1]));
console.log(isPalindrome([1, 2]));