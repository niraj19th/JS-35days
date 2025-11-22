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


const msg = ` hello iam writing the msg called hello `

console.log(msg.lastIndexOf(hell));  // counts the 1st one
console.log(msg.lastIndexOf(hell)); // counts the last one

console.log(msg.includes(hello)); // if it is present than true otherwise false

// slice

console.log(msg.slice(2,7)); // starting from 2 to 6 will display, however 7th index is written but it will take upto 6th only


//  if one needs to join two string than we can concadinate

const a = "Niraj";
const b = "Kandel";
const c = a + "" + b ;  // prints Niraj Kandel

//  making changes or replacing in string

let arr = "Iam typing hello to show hello in screen";

console.log(arr.replace(Iam, Hy)); // iam changes into hy
console.log( arr.replaceAll(Hello, NewWord)); // both hello will be changed into `NewWord`;

// trim
 
const abc = " ARUN "
console.log(abc.trim());   // this will remove spaces additionally we can remove space infront or back too using trim.end and trim.


// if we want to remove something and make it array than us .split

const caste = "Bahun, Limbu, Rai, Shah";

console.log(caste.split(","));


