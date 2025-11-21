//  Number

let a = 20;
let b = 30.63

console.log(b.tofixed(1))  // prints 30.something it will round off-> this is string

console.log(b.toStringa()); // 


//  can create number by new way-> new Number()- creates as object

let a = new Number(20);
let b = new Number(20);

console.log(a == b)
//  this creates object thats why this is not the good way to create number, and when we do compare it cant be comapre in this way because this is an obj

// non primitive - based on reference , comparision be done
// primitive - copy by value


console.log(Math.abs(-4));   // prints positive 
console.log(Math.PI); // prints the value of pi
console.log(Math.max(4,10,20,30)); // prints the max value

// practical example : if we want to generate random number , for some purpose like - for betting app

console.log(Math.random());  // will generate 0.11 to 0.999

console.log(Math.random()*10) // will generate from 0.111 to 9.9999

console.log(Math.floor(Math.random()* 10)) // will generate from 0 to 9 , with no decimal number

console.log(Math.floor(Math.random()*10+1));// will generate from 1 to 10

console.log(Math.floor(Math.random()*6)+1); // will generate from 0 to 6 

// Math.floor(Math.random()*totalNumberofOutcome)+ shift -- > this is the actual logic happening


// for example - 25 to 35
console.log(Math.floor(Math.random()*10)+ 25 );  // will generate number from 25 to 35


// OTP to generate- 4 digits : 1000-9000

