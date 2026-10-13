
let a = prompt("Enter first number");
let b = prompt("Enter second number");

try {
    if (
        a === null || b === null ||
        a.trim() === "" || b.trim() === "" ||
        Number.isNaN(Number(a)) ||
        Number.isNaN(Number(b))
    ) {
        throw new SyntaxError("Please enter both numbers correctly!");
    }

    let sum = Number(a) + Number(b);

    console.log("The Sum is", sum);
}
catch (error) {
    console.error(error.message);
    throw error;
}

// If error occurs the script will stop working

console.log("Hello World");

// ----------------------------------------------------------

// The second code below are using reuse variable name is just for example 


let a = prompt("Enter first number");
let b = prompt("Enter second number");

try {
    if (a === null || a.trim() === "") {
        throw new Error("First number is missing!");
    }

    if (b === null || b.trim() === "") {
        throw new Error("Second number is missing!");
    }

    if (Number.isNaN(Number(a))) {
        throw new Error("First input must be a number!");
    }

    if (Number.isNaN(Number(b))) {
        throw new Error("Second input must be a number!");
    }

    let sum = Number(a) + Number(b);

    console.log("The Sum is", sum);
}
catch (error) {
    throw error;
}

// If error occurs the script will stop working
console.log("Hello World");