console.log("Hello Today we discuss about let, var, const, primitive data types and object in JavaScript..")


// Using var

var a,b;
a = 2;
b = 3;

console.log(a + b + 10)


// Using let

let c,d;

c = 16;
d = 20;

console.log(c + d)


// Using typeof & primitive datatypes concepts


let q,r,s,t,u;
q = 15;
r = "ZAIN";
s = null;
t = false;
u = undefined;

console.log(q,r,s,t,u)
console.log(typeof q,typeof r,typeof s,typeof t,typeof u)


// Using JavaScript Object

let obj = {
    "Name" : "Zain",
    "Designation" : "Web Developer",
    "Job Code" : "7BO8E",
    "Address" : "Shad Bagh Lahore",
    "City" : "Lahore, Pakistan"
}

console.log(obj)

obj.Salary = "500 Crores"

console.log(obj)

obj.Salary = "1000 Crores"

console.log(obj)


// Quiz By "CodeWithHarry" Write a JavaScript Program to store name, phone number and marks of a student using object

// Note that the double qoutes required in that situation if key is made of two words and has space between them in key-value pairs in JavaScript Objects..

console.log("Quiz by CodeWithHarry")

let o = {
    Name : "Ali",   //Double Quotes not required but you can use it to make consistent and there is not effect of using double qoutes.
    "Phone Number" : "+9230123456789",
    "Obtained Marks" : "560 out of 600"

    
}

console.log(o)

