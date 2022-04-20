const canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  let ransomNoteArr = ransomNote.split('');
  let oldMagazineLength = magazine.length;
  ransomNoteArr.forEach(function(item, index) {
    magazine = magazine.replace(item,'');
  });
  if (oldMagazineLength == magazine.length + ransomNoteArr.length) {
    return true;
  } else {
    return false;
  }
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));