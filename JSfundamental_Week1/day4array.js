// // ARRAY

// let num1 = 10;
// let num2 = 20;
// let num3 = 30

// let num = [10,20,30]  // creation of array
// console.log(num);  // array printed

// console.log(num.length)  // finds length of array

// let arr = ["20, "Niraj", true"];  // we can store multiple types of data in array in JS

// console.log(arr); // print whole array

// console.log(arr[0]); // prints 20, yes we can access it by index
// console.log(type of arr); // show the type of array [1] is i.e num

// //  we can change the num/ value of index

// arr[0] = 90
// console.log(arr[0]); // index value of 0 was 20 but now it is 90

// // push- if we want to add newelement in array

// arr.push(40);
// arr.push("Arjun");

// console.log(arr); // prints 90, niraj, true, 40, arjun

// // POP - if we want to dlt from last element

// arr.pop();
// console.log(arr); // prints 90 niraj true 40



// //  unshift - we want to add element in first[0], not in last

// arr.unshift[99];
// console.log(arr); // prints 99, 90 to end


// // shift- delete element from the starting index

// arr.shift();
// console.log(arr); // prints from 90 to end

// ---> we can use but It is not recommended to use shift and unshift, because it slows the performance_of the system-<



let arr = ["10, 20, 30, 35, 40, 45, 55, 50"];

for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// trim the part of array -> no changes in the orginal array

const arr = [1,5,10,11,20,30];
const arr2 = arr.slice(2,4); //
console.log(arr2); // prints 10,11

// trim the part of array but make change in orginal

const arr= [10,20,30,40,45,65];
const arr2 = arr.splice(2,5);
console.log(arr2);  // prints arr2 = 


// 

const arr= [1,2,3,4,5];
const arr2=[5,7,8,9,10];
const arr4 = [10,12,13,14];
const arr3 = arr.concat(arr2); // to merge to array wr can do arr.concat(arr2,arr4); // like this we can do

console.log(arr3); // prints from 1 to 10 [1-10]

// The spread operator (...) in JavaScript expands an array, string, or object into individual elements without modifying the original.

const arr3 = [...arr,...arr2,...arr4];
console.log(arr3);


// join operator- convert array to string 
const names= ["Niraj", "Ram", "Hari"];

console.log(names.toString()); // Niraj Ram Hari
console.log(names.join("-")); // prints Niraj - Ram - Hari

console.log(names.includes("Niraj")); // if present true otherwise false


// Advance array concept

const fruits = ["Orange", "Apple", "Kiwi", "Papaya", "Banana"]

fruits.sort(); // this helps to sort fruits in ascending order in terms of alphabetical order 
// note:// A comes before a, Z comes before a - ASCII TABLE


fruits.reverse(); // sorts in descending order

console.log(fruits); // "apple", "banana", "kiwi", "orange", "papaya"


// note:// A comes before a, Z comes before a 