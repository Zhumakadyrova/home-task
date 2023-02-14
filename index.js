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

function result1(a, b, c) {
  console.log(a + b +c);
}
result1(8, 5, 6);

function result2(a, b, c) {
  return a* b * c;
}
console.log (result2(10, 5, 3));

function result3(a, b) {
  console.log(a* b /2)
}
result3(8, 10);

for (let a = 0; a <= 10; a ++)
console.log(a);

let number = [1, 5, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0; 
for(let j = 0; j < number.length; j++) {
  sum = sum + number[j];
}
console.log(sum);
//  How to create object
let example1 ={}; 

// с лева название свойтсва, справа значение свойства
let joldosh = {
  name: "Joldosh", 
  age: 22, 
  isEmployed: false,
  sayHello: function() {
    console.log("Hello");
  },
}; 

// view, edit, add 


console.log(joldosh.name);
joldosh.age = 20;
console.log(joldosh.age);
joldosh.favouriteBooks = ["Harry potter", "Harry Potter2"];
console.log(joldosh);
delete joldosh.favouriteBooks;
console.log(joldosh);
joldosh.sayHello();
// let school = {
//   school:"secondary",
//   size: "big",
//   meaning: "studying",

// }
// Щбьекты могут содержать функции и они в обьекте будут называться методом этого объекта


let nagima = { 
  name: "Nagima", 
  age: 21, 
  workPlace: "Private School", 
  isEmployed: "Student", 
  sex: "Female",
  surname: "Zhumakadyrova",
  secondName: "Shailobekovna",
  color: "White",
  sayAddress: function() {
    console.log("Gagarin 9");
  },
  sayHobby: function() {
    console.log("My hobby is to read a book"); 
  },
  sayBye: function() {
    console.log(" Bye " + this.name);
  },
  sayAge: function() {
    console.log ( " I'm " + this.age + " y.o");
  },
  saySex: function() {
    console.log ( " She is a " + this.sex);
  },
};
nagima.sayAge();
nagima.age = 18;
nagima.sayAge();
nagima.sayBye();
nagima.name = "Nagi";
nagima.sayBye();
nagima.saySex();
nagima.sayHobby();
nagima.sayAddress();
// console.log(nagima);
// console.log(nagima.name);
// console.log(nagima.age);
// console.log(nagima.sex);
// nagima.age = 18;
// console.log(nagima.age);

let example = {
  number: 0,
}