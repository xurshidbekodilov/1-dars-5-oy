// Destructuring assignment ga oid vazifa

// 1 misol
/*
const info = ["Ali", 30, "Toshkent"];
const [name, age, city] = info;
console.log(name , age, city);*/

// 2 misol
/*
const res = ["red", "green", "blue", "yellow", "purple"]
const[sum , sum1 , ...sum2] = res;
console.log(sum,sum1,sum2);
*/

// 3 misol
/*
const res =['1','2','3','4','5']
function func(arg) {
    const [a ,,,,b] = arg;
    let res = a+b;
    return res
    }
    let res1 = func(res);
    console.log(res1);
}
*/

// 4 misol
/*
const res = [1, 2, 3, 4];
const [, a, , , b = 10] = res;
console.log(a , b);
*/

// Object Destructuring:

// 1 misol

// const arg = {
//     title: "JavaScript for Beginners",
//         author: "John Doe",
//         year: 2021
// }
// const {title,author} = arg
// console.log(title , author )

// 2 misol
/*
const arg = {
    city: "Toshkent",
    coordinates: {
    latitude: 41.2995,
    longitude: 69.2401
    }
}
const {coordinates: {latitude,longitude}} = arg
console.log(latitude );
console.log(longitude);
*/

// 3 misol
/*
const arg = {
 name:'elyor',
  lastname:'valiyev',
  age:30,
}
*/

// 4 misol
/*
const arg = {
    name: "elyor",
    language: "uzb"
}
*/

// regular

// 1 misol

// let res = [1,2,3,4,5,6,7,9,]
// let res1 = 0;
//  const name = function (arg) {
//     for (const iterator of arg) {
//         if (iterator % 2 == 1) {
//             res1 += iterator

//         }

//     }
//     return res1
// }
// console.log(name(res));

// 2 misol

// let res = [2,3,4,5]

// function name(arg) {
//     let min = arg[0];
//     for (const iterator of arg) {
//         if(iterator < min)
//         min = iterator
//     }
//     return min
// }
// console.log(name(res));

// 3 misol
// function name(arg) {
//     let res = '';
//     for (const iterator of arg) {
//         if (iterator >= '0' && iterator <= '9') {
//             res += iterator;
//         }

//     }
//     return res
// }
// console.log(name('sa2l11o1m'));

// 4 misol

// function name(arg) {
//     return arg * arg

// }
// console.log(name(5));

// 5 misol

// function name(arg) {
//     let arr = arg.split(' ');
//     arr = arr.map(function(value){
//       return value.split('').reverse().join('')

//     })
//     return arr.join(' ')
// }

// console.log(name('salom bolalar'));

// 6 misol

// function name(arg) {
//   let counter = 0;
//   for (let i = 0; i < arg.length; i++) {
//     let res = arg[i];
//     if (res.toLowerCase() !== res.toUpperCase()) {
//       counter++;
//     }
//   }
//   return counter
// }

// console.log(name('sa555lo22m xa22yr'));

// 7 misol

// function name(arg) {
//     return arg * arg * arg

// }
// console.log(name(5));

// 8 misol


// let matn = 'salom';
// function func(){
//     let arr = matn.split('')
//     let newArr = [];
//     for(let i=0; i <arr.length; i++){
//         if(
//             arr[i]== 'A' 
//             arr[i]== 'E' 
//             arr[i]== 'I' 
//             arr[i]== 'O' 
//             arr[i]== 'U' 
//             arr[i]== 'a' 
//             arr[i]== 'e' 
//             arr[i]== 'i' 
//             arr[i]== 'o' 
//             arr[i]== 'u'
//         )
//         {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(func())

// 9 misol

// function name(arg) {
//   if (arg.length === 0) {
//   }

//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }
//   return sum / arg.length;
// }
// console.log(name([1,2,3,4,5,6,7,8,9,10]));

// 10 misol
// function name(text, word) {
//     return text.replace(word, '');
// }
// console.log(name("salom bolalar ","qalesizlar")); 

//  express

// 1 misol

// let res = [1,2,3,4,5,6,7,9,]
//  const name = function (arg) {
//     let      res1 = 0;
//     for (const iterator of arg) {
//         if (iterator % 2 == 1) {
//             res1 += iterator

//         }

//     }
//     return res1
// }
// console.log(name(res));

// 2 misol

// let res = [2,3,4,5]

//  const name = function(arg) {
//     let min = arg[0];
//     for (const iterator of arg) {
//         if(iterator < min)
//         min = iterator
//     }
//     return min
// }
// console.log(name(res));

// 3 misol
// const name = function(arg) {
//     let res = '';
//     for (const iterator of arg) {
//         if (iterator >= '0' && iterator <= '9') {
//             res += iterator;
//         }

//     }
//     return res
// }
// console.log(name('sa2l11o1m'));

// 4 misol

// const name =function (arg) {
//     return arg * arg

// }
// console.log(name(5));

// 5 misol

// const name=function (arg) {
//     let arr = arg.split(' ');
//     arr = arr.map(function(value){
//       return value.split('').reverse().join('')

//     })
//     return arr.join(' ')
// }

// console.log(name('salom bolalar'));

// 6 misol

// const name=function(arg) {
//   let counter = 0;
//   for (let i = 0; i < arg.length; i++) {
//     let res = arg[i];
//     if (res.toLowerCase() !== res.toUpperCase()) {
//       counter++;
//     }
//   }
//   return counter
// }

// console.log(name('sa555lo22m xa22yr'));

// 7 misol

// const name=function(arg) {
//     return arg * arg * arg

// }
// console.log(name(5));

// 8 misol

// 9 misol

// const name=function(arg) {
//   if (arg.length === 0) {
//   }

//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }
//   return sum / arg.length;
// }
// console.log(name([1,2,3,4,5,6,7,8,9,10]));

// 10 misol
// const name=function(text, word) {
//     return text.replace(word, '');
// }
// console.log(name("salom bolalar ","qalesizlar"));

// Array

// let res = [1,2,3,4,5,6,7,9,]
//  const name = (arg) => {
//     let      res1 = 0;
//     for (const iterator of arg) {
//         if (iterator % 2 == 1) {
//             res1 += iterator

//         }

//     }
//     return res1
// }
// console.log(name(res));

// 2 misol

// let res = [2,3,4,5]

//  const name = (arg) => {
//     let min = arg[0];
//     for (const iterator of arg) {
//         if(iterator < min)
//         min = iterator
//     }
//     return min
// }
// console.log(name(res));

// 3 misol
// const name = (arg) =>{
//     let res = '';
//     for (const iterator of arg) {
//         if (iterator >= '0' && iterator <= '9') {
//             res += iterator;
//         }

//     }
//     return res
// }
// console.log(name('sa2l11o1m'));

// 4 misol

// const name = (arg) =>{
//     return arg * arg

// }
// console.log(name(5));

// 5 misol

// const name= (arg) =>{
//     let arr = arg.split(' ');
//     arr = arr.map(function(value){
//       return value.split('').reverse().join('')

//     })
//     return arr.join(' ')
// }

// console.log(name('salom bolalar'));

// 6 misol

// const name=(arg)=> {
//   let counter = 0;
//   for (let i = 0; i < arg.length; i++) {
//     let res = arg[i];
//     if (res.toLowerCase() !== res.toUpperCase()) {
//       counter++;
//     }
//   }
//   return counter
// }

// console.log(name('sa555lo22m xa22yr'));

// 7 misol

// const name=(arg) =>{
//     return arg * arg * arg

// }
// console.log(name(5));

// 8 misol

// 9 misol

// const name=(arg) =>{
//   if (arg.length === 0) {
//   }

//   let sum = 0;
//   for (let i = 0; i < arg.length; i++) {
//     sum += arg[i];
//   }
//   return sum / arg.length;
// }
// console.log(name([1,2,3,4,5,6,7,8,9,10]));

// 10 misol
// const name=(text, word) => {
//     return text.replace(word, '');
// }
// console.log(name("salom bolalar ","qalesizlar"));
