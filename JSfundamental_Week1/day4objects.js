// object
->// key value - whatever inside object, eg, age name

const user = {
    name : "Niraj";
    age : 20;
    emailId: "nirajkadel78@gmail.com"
    amount: 3000;
}

console.log(user);
// to get specific value - 
console.log(user.age);

// CRUD - CREATE, READ, UPDATE, DELETE

// Update

user.citizenShipNum= 2222;
user.amount = 5000; // update the details, for example amount update from 3000 to 5000
console.log(user);

// Delete

delete user.age;  // age deleted from the object
console.log(user); 

// To access/ display keys only --> Important

console.log(Object.keys(user)); // for example age = 30, age is key and 30 is values  

console.log(Object.values());  // concept above mentioned

console.log(Object.entries()); // both keys and values will be displayed,  but i guess it will be shown in array

// Updated on Nov 23, 2024 - taking a break today!


// tutorial no #8 , #9 and #10 should be completed tomorrow, at anycost.\

// will be completed js course probably within this week or next week tuesday
// close for today .. 11/23/20235, 9-25pm

// 11/24/2025 -> 9-00pm

// loop - imp

for ( let num in user){
    console.log(keys, user[keys]);  // keys are name,age // user keys are the value inside like name, age
}
//  this is how it works - user.keys user["name"] user["age"]


const name= user.name
 const age = user.age


//  object destructuring instead of upper one

 const {name, age, amount} = user;

 console.log(name, age, amount);

//  array destructuring 
const {name, age} = user;   // can add detail by doing name:xyz , age: xyz */

const arr = [10,20,40,90,11];

const[first, second] = arr;

console.log(name,age);
console.log(first, second);
