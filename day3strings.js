// string

const str1 = "NIRAJ";
const str2 = 'Arun'
const day = 18;
const str3 = `Ram ${day}`;  // ${ } helps to access in any place

// console.log(str1, str2, str3);
console.log(str3)  // this is the best practice of creating array ` `


const arr= ` Hello world`

console.log(arr.length)  // helps to know the length of the string
console.log(arr[1]); // can be accessed particular array _> 

arr[2] = s ; // immutable-> cant be changed
console.log(arr);

// upppercase
console.log(arr.toUpperCase()) -> // immutable so , upper array will not be changed hence new array duplicated will be created and shownn in uppercase


const a = str.toUpperCase();
const b = str.toLowerCase();

console.log(a,b);
