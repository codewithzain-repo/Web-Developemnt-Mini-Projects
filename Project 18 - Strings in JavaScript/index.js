// JavaScript Strings

let a = "Zain";
let b = "Vaseline";

console.log(a.slice(1,3))
console.log(a.toUpperCase())
console.log(a.toLowerCase())
console.log(a.endsWith("in"))
console.log(a.startsWith("Za"))
console.log(a.concat(" The Champion!"))
console.log(a.indexOf("i"))  // Index of Zain
console.log(a.charAt())
console.log(a.lastIndexOf("n"))
console.log("The Vaseline is Now",(b.replace("Vaseline", "Baseline!")))
console.log(a.trim()) // Remove Whitespaces before and after the text of string
console.log(a.valueOf("a"))

//valueOf Function

let num = new Number(20);
console.log(num.valueOf() + 10)

console.log(a.codePointAt(1)) //Calculate Unicode point