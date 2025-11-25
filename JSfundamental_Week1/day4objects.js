// ======================================================
// JavaScript Objects & Arrays – Full Explanation
// ======================================================

// -------------------------------
// 1️⃣ Object Declaration (Key-Value Pairs)
// -------------------------------

// Objects store data in key-value format. 
// Keys are like labels, values can be numbers, strings, arrays, or even other objects.
const user = {
    name: "Niraj",                       // key = 'name', value = "Niraj"
    age: 20,                             // key = 'age', value = 20
    emailId: "nirajkadel78@gmail.com",   // key = 'emailId', value = string
    amount: 3000                          // key = 'amount', value = 3000
};

// Console log the whole object
console.log("Original User Object:", user);

// Accessing a specific value using its key
console.log("User Age:", user.age); // Output: 20
// Meaning: You can directly get the value of a property by writing objectName.key

// -------------------------------
// 2️⃣ CRUD Operations (Create, Read, Update, Delete)
// -------------------------------

// CREATE (Add new property)
user.citizenShipNum = 2222;  // adding new property key 'citizenShipNum' with value 2222

// UPDATE (Change existing property)
user.amount = 5000;           // changing amount from 3000 → 5000
console.log("Updated User Object:", user);

// DELETE (Remove property)
delete user.age;              // removes the 'age' property from the object
console.log("After Deleting Age:", user);

// Explanation:
// - CREATE: Add a new property dynamically without modifying the original declaration
// - READ: Access using object.key
// - UPDATE: Change value by assigning new value
// - DELETE: Remove key-value pair
// Real-world: This is how you manage user profiles, bank accounts, inventory items, etc.

// -------------------------------
// 3️⃣ Object Keys, Values, Entries
// -------------------------------

// Object.keys() → returns array of all property names (keys)
console.log("Keys:", Object.keys(user)); 
// Output: ["name","emailId","amount","citizenShipNum"]

// Object.values() → returns array of all property values
console.log("Values:", Object.values(user)); 
// Output: ["Niraj","nirajkadel78@gmail.com",5000,2222]

// Object.entries() → returns array of [key, value] pairs
console.log("Entries:", Object.entries(user)); 
// Output: [["name","Niraj"], ["emailId","nirajkadel78@gmail.com"], ...]

// Interview Tip:
// - Often asked: "How to get all keys or values dynamically"
// - Useful for API responses where you don't know property names in advance

// -------------------------------
// 4️⃣ Looping Through Objects
// -------------------------------

// Using for...in → loops through keys
console.log("For...in loop:");
for (let key in user) {
    console.log(key, ":", user[key]);
}
// Output: name: Niraj, emailId: ..., amount: ..., citizenShipNum: 2222

// Using Object.keys() with for...of
console.log("Keys using Object.keys():");
for (let key of Object.keys(user)) {
    console.log(key, "->", user[key]);
}

// Using Object.entries() with destructuring
console.log("Key-Value Pairs using Object.entries():");
for (let [key, value] of Object.entries(user)) {
    console.log(`${key}: ${value}`);
}

// Explanation:
// - Looping is required when we have dynamic properties or multiple items to process
// - Object.entries() + destructuring is cleaner than for...in for printing key-values
// Real-world: Display all users in a dashboard dynamically

// -------------------------------
// 5️⃣ Object Destructuring
// -------------------------------

// Extracting properties into variables (shorter & cleaner)
const { name, amount, emailId } = user;
console.log("Destructured Values:", name, amount, emailId);

// Rename variables while destructuring
const { name: userName, amount: userAmount } = user;
console.log("Renamed Destructured:", userName, userAmount);

// Explanation:
// - Instead of writing `const name = user.name`, we can unpack all needed properties at once
// - Useful in React props or API responses

// -------------------------------
// 6️⃣ Array Destructuring
// -------------------------------

// Arrays store ordered data
const arr = [10, 20, 40, 90, 11];

// Extract first two elements and remaining
const [first, second, ...rest] = arr;
console.log("First and Second:", first, second); // 10 20
console.log("Rest of Array:", rest);             // [40, 90, 11]

// Swapping values using array destructuring
let x = 5, y = 10;
[x, y] = [y, x];
console.log("Swapped:", x, y); // 10 5

// Explanation:
// - Array destructuring is used to quickly assign variables from arrays
// - Useful for top scores, coordinates, or any ordered data

// -------------------------------
// 7️⃣ Array Example
// -------------------------------
const arr1 = [1, 2, 4, 5];
const [f, s] = arr1; 
console.log("First two elements of arr1:", f, s); // 1 2

// -------------------------------
// 8️⃣ Summary / Best Practices
// -------------------------------

/*
1️⃣ CRUD on Objects:
   - CREATE: Add new properties → user.newProp = value
   - READ: Access properties → user.key
   - UPDATE: Change values → user.key = newValue
   - DELETE: Remove properties → delete user.key

2️⃣ Object.keys(), Object.values(), Object.entries():
   - Use for dynamic data, API responses, UI loops

3️⃣ Loops:
   - for...in → iterate object keys
   - for...of → iterate arrays
   - Object.entries() + destructuring → clean key-value processing

4️⃣ Object & Array Destructuring:
   - Extract multiple values in one line
   - Rename variables if needed
   - Swap array elements easily

5️⃣ Real-world usage:
   - APIs, React props, dashboards, forms, user management
   - Dynamic processing of unknown data

6️⃣ Bad Practices to Avoid:
   - Mutating global objects in big apps
   - Over-destructuring deeply nested objects
   - Using for...in to loop over arrays
*/

//  we can create function inside js which we call methods, not only keys can be created

const user = {
        name : "Niraj";
        age : 20;
        emailID : "nrj@gmail.com"

        greeting: function(){
            console.log(`Strike is coming$(this.name)`);  // we can add username using $(user.name)` but instead we use this.username command
            return 20;
        }
    }

user.greeting();   // greeting is the function here. we can return also
const va = user.greeting();
console,log(va);    