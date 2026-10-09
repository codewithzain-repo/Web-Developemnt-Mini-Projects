// JavaScript Conditionals

let age = 16;

if(age>18){
    console.log("You can drive!");
}

else
{
    console.log("You can't drive!")
}


// if-else-if ladder

let license, ab;
ab= "yes";

license = prompt("Enter Yes if you have License! If you haven't Enter No to continue")

console.log("You Entered "+license)

if(license !== null &&  license.toLowerCase() === ab){
    console.log("You are eligible to drive!")
}

else{
    console.log("You are not eligible to drive!")
}


// increment Operators

let c;
c = 8;
c += 12;   // Combining value of c with 12

console.log("Final value would be :" +c)
 

// Exponential Increment 

let e = 12;
let n = 2;

e**= n;

console.log(e) // ** it means 12 raise to power 2 




