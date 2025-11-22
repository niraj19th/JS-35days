// ARRAY

let num1 = 10;
let num2 = 20;
let num3 = 30

let num = [10,20,30]  // creation of array
console.log(num);  // array printed

console.log(num.length)  // finds length of array

let arr = ["20, "Niraj", true"];  // we can store multiple types of data in array in JS

console.log(arr); // print whole array

console.log(arr[0]); // prints 20, yes we can access it by index
console.log(type of arr); // show the type of array [1] is i.e num

//  we can change the num/ value of index

arr[0] = 90
console.log(arr[0]); // index value of 0 was 20 but now it is 90

// push- if we want to add newelement in array

arr.push(40);
arr.push("Arjun");

console.log(arr); // prints 90, niraj, true, 40, arjun

// POP - if we want to dlt from last element

arr.pop();
console.log(arr); // prints 90 niraj true 40



//  unshift - we want to add element in first[0], not in last

arr.unshift[99];
console.log(arr); // prints 99, 90 to end


// shift- delete element from the starting index

arr.shift();
console.log(arr); // prints from 90 to end

---> we can use but It is not recommended to use shift and unshift, because it slows the performance_of the system-<

