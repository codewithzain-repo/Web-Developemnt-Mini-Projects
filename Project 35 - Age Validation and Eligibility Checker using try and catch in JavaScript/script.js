let age = prompt("Enter your age to check eligibility for applying a Job");

try{
    if(age === null || age.trim() ===""){
        throw new Error("Please Input Age!")
    }

    if(Number.isNaN(Number(age))){
        throw new Error("Enter a valid Number!")
    }

    if(age >= 18){
        console.log("You can apply for a job!")
    }

    if(age < 18){
        console.log("You are too young!")
    }

}

catch(error){
    throw error;

}

