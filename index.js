let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = chars.filter((element, index) => {
    return chars.indexOf(element) === index;
});

console.log(uniqueChars);
// 1 method
const removeDuplicates = [ 4, 6, 11, 6, 4, 19, 6];

const unique = [ ... new Set(removeDuplicates)];
console.log(unique);
// 2 method
const removeDuplicates1 = [ 4, 6, 11, 6, 4, 19, 6];
const unique1 = removeDuplicates1.filter((value, index) => {
  return removeDuplicates1.indexOf(value) === index;
})
console.log(unique1);

// 1 self-try
const extraNumber = [4, 5, 7, 8, 9, 10, 5 , 4];

const unique2 = extraNumber.filter((value, index) => {
  return extraNumber.indexOf(value) === index;
})
console.log(unique2);

const extraNumber1 = [4, 5, 7, 8, 9, 10, 5 , 4];
function uniqueElements(array) {
  const unique3 =[];
  array.forEach((value) =>{
    if(!unique3.includes(value)){
      unique3.push(value)
    }
  })
  return unique;
}
const unique3 = uniqueElements(extraNumber1);
console.log(extraNumber1.prototype);