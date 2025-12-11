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