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

// To access/ display keys only

console.log(Object.keys(user)); // for example age = 30, age is key and 30 is values  

console.log(Object.values());  // concept above mentioned

console.log(Object.entries()); // both keys and values will be displayed,  but i guess it will be shown in array


