// Functions in JavaScript:

// 1. Simple Function

function enter(name){

    console.log("Hey I am " +name)

}

enter("Zain")

// Sum Function

function sum(a,b){
    return a+b;
}

let result = sum(11,19);
console.log("The Result is ",result)

// 2. Arrow Function


const _enter = (real_name)=>{

    console.log("Hey I am " +real_name)


}

enter("Ali")



//Template Literal

// 1. Normal Way

let full_name="Muhammad Zain";
let course="Web Developement";

console.log("Hey My Name is " + full_name + " I am currently persuing " + course + " Course from BanoQabil");

// 2. Actual Usecase


let f_name="Muhammad Zain";
let _course="Web Developement";

console.log(`My Name is ${f_name} and I am currently persuing ${_course} Course from BanoQabil `)


// Template Literal Task

let product = "Wireless Headphones";
let price = 3500;
let brand = "Audionic";
let discount = 70;

console.log(`Product: ${product} \nPrice: ${price} \nBrand: ${brand} \nDiscount: ${discount} \nDiscounted Price: ${price - (price*discount/100)}`)



