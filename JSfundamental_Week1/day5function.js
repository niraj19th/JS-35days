//  function 

function greeting(){
    console.log("My name is niraj");
}
greeting();


fucntion addNumber(num1, num2,){  // num1.=,2 parameter
    const sum = num1 + num2;
    console.log(sum);
}

addNumber(6,10);  // arguement



// want to do multilpication for multiple times use REST operator

function addNumber(...num){                      // will put inside array by rest operator imp rest and spread operator
 let sum= 0;
 
 for(let n of num){
    sum+=n;
 }
 console.log(sum);

}
