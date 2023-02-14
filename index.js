// let chars = ['A', 'B', 'A', 'C', 'B'];

// let uniqueChars = chars.filter((element, index) => {
//     return chars.indexOf(element) === index;
// });

// console.log(uniqueChars);
// // 1 method
// const removeDuplicates = [ 4, 6, 11, 6, 4, 19, 6];

// const unique = [ ... new Set(removeDuplicates)];
// console.log(unique);
// // 2 method
// const removeDuplicates1 = [ 4, 6, 11, 6, 4, 19, 6];
// const unique1 = removeDuplicates1.filter((value, index) => {
//   return removeDuplicates1.indexOf(value) === index;
// })
// console.log(unique1);

// // 1 self-try
// const extraNumber = [4, 5, 7, 8, 9, 10, 5 , 4];

// const unique2 = extraNumber.filter((value, index) => {
//   return extraNumber.indexOf(value) === index;
// })
// console.log(unique2);

const extraNumber1 = [4, 5, 7, 8, 9, 10, 5 , 4];


function uniqueElements(array) {
  let unique3 =[];
  array.forEach(value => {
    if(!unique3.includes(value)){
      unique3.push(value)
    }
  })
  return unique3;
}
const unique3 = uniqueElements(extraNumber1);
console.log(unique3);

const removeDuplicates = ["a", "a", "b", "c", "c", "a" ];
function uniqueItems(row) {
  let unique =[];
  row.forEach(value => {
    if(!unique.includes(value)){
      unique.push(value)
    }
  })
  return unique;
}
const unique = uniqueItems(removeDuplicates);
console.log(unique);

const without = [4, 5, 1, 1, 7, 1];
function uniqueNumber(without1) {
  let unique1 =[];
  without1.forEach(value => {
    if(!unique1.includes(value)){
      unique1.push(value)
    }
  })
  return unique1;
}
const unique1 = uniqueNumber(without);
console.log(unique1)

const without1 =["a", "b", "c"];
without1.pop();
console.log(without1);

let without2 = [4, 5, 1, 1, 7, 1];
without2.pop();
console.log(without2)