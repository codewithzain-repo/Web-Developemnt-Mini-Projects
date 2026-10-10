function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {;
            resolve("Data is fetched successfully");
            reject("Error fetching data");
        }, 2000);

    });
}


console.log("Script started");
console.log("Fetching data...");
console.log("Data fetched successfully");



let data = getData();

data
.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}   );


async function fetchData() {
    try {
        let result = await getData();
        console.log(result);
    } catch (error) {
        console.log(error);
    }

}

fetchData();

// -------------------------------------------------------------

console.log("async/await function is initialized");


function syncData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}

async function getData() {
    let fetchedData = await syncData();
    console.log(fetchedData);
}

getData();

// ----------------------------------------------------------------

/* Task for practice:Requirements:

getUserData() naam ka function banao.

Iske andar setTimeout() lagao jo 2 seconds baad chale.

2 seconds baad "User data fetched!" message ko resolve() karo.

Ek async function showData() banao.

Uske andar await se data receive karo aur console.log() se print karo.

Expected Output:

(2 seconds baad)
User data fetched! */

const getUserData = () => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("User data fetched!");
        }, 2000);
    });
};

const showData = async () => {
    try {
        const userData = await getUserData();
        console.log(userData);
    } catch (error) {
        console.error(error);
    }
};

showData();

/* Task 2: Check Student Result Using Promise

Scenario: Tum ek function banaoge jo 2 seconds baad student ka result return karega.

Requirements

checkResult() naam ka function banao.

Is function mein new Promise() use karo.

setTimeout() se 2 seconds ka delay lagao.

Agar marks 50 ya us se zyada hon, to resolve("Pass") karo.

Agar marks 50 se kam hon, to reject("Fail") karo.

async/await aur try...catch use karke result handle karo. */


const checkResult = () => {
    return new Promise((resolve, reject) => {

        let random = Math.ceil(0 + Math.random() * 100)
        console.log(`Student got ${random} Now the system checking whether the Student is Passed or Failed according to the Passing Criteria`)

        setTimeout(() => {

            if(random > 50){
                resolve("Student Passed")
            }

            else
                reject("Student Failed")

        }, 2000);
    })
}

let result = async ()=>{

    try {
        const studentData = await checkResult();
        console.log(studentData)
    }

    catch (error) {

        console.log(error)

    }
}

result();


