function niraj(){
    console.log("New Year")
}
niraj();


// function statement

function niraj(){

}

// function expression- if we save function in variable

let fnc = function(){

}

// arrow functions- fat arrow functions

let fnc = () => {

    console.log("Hello how are you")
}

fnc();



// parameters and arguements 

function print(one){
    console.log(`${one} is dancing1`);
}

print("Ram");
print("Hari");
print("Krish")

//  next example

function add(v1, v2){
    console.log( v1 + v2);
}

add(4 , 1);


// default, rest and spread paramater\


// default paramater
function add(v1=0, v2=0){
    console.log( v1 + v2);
}

add(4, 9);

// rest

function abcd(...val){
    console.log(val);
}

abcd(4,10,12,1,3);


// return values adn early returns

// return means from where came we will put it there itself

function abcd(){
    return 12;
}

let val = abcd();
console.log(val);


//1. What Are First-Class Functions?

// In JavaScript, functions are treated like normal values (just like numbers, strings, or objects).
// This ability is called first-class functions.

// 1. What Is a Higher-Order Function?

// A Higher-Order Function is a function that either:

// Takes another function as an argument

// Returns a function


// pure vs impure function



// practice
// dif betweenfunction declaration and expression?

abcd();  ---- hositing
function abcd(){             -- fucnction creation

} 
//  no error if we do hositing in function declaration

// function expression

abcd();   -- hosting will not occur, error will be seen----> cannot access beofre intiazation

let abcd = function () {

}

//  making function simple

greet();  ===> this is being hosited meaning called before intiazation

function greet(){
    console.log("Hello");
}

//  convert function to arrow function

function multiply(a,b){
   return a * b 
};

// converting

let multiply = (a,b) => {
   return a * b 
};


// how many parameters and arguement

function demo(a, b, c){}

demo(1,2)    

//  demo- a b c is  paramater and 1 adn 2 is arguement after that a will be 1 and b will be 2 where c will remaun undefined
//  there are 2 arguement


// making function

function sayHi(name - "Guest") {
    console.log("HI",  name)
}
sayHi()    // no arguement passed so will be displayed HI Guest....


//  what does ... operator mean in paramter?

function add(...val){      // all value will be stored as array in ...val beacuse it is rest operator 

}
add(1,2,3,4,5)


// use rest parameter  to accept any number of scores and return the total


function getScore(...score){
    console.log(score);
}

getScore(10,12,13);