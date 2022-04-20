const middleNode = function(head) {
  let mid = Math.floor(head.length / 2);
  let newArr = [];
  for (let i = 0; i < head.length; i++) {
    if (mid === i) {
      newArr = head.slice([i]);
      return newArr;
    }
  }
};

console.log(middleNode([1,2,3,4,5]));
console.log(middleNode([1,2,3,4,5,6]));
console.log(middleNode([4,5,6,7,8,9]));
console.log(middleNode([4,5,6,7,8,9,10]));