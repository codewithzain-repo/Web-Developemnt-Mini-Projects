const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {

        let rand = Math.random();

        if(rand > 0.5) {
            resolve("Operation completed successfully!");
        } else {
            reject("Operation failed!");
        }
    }, 2000);
});

myPromise
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

 setTimeout(() => {

    console.log("Task: Online Payment Checker. Tumhein ek Promise banana hai jo check kare ke payment successful hui ya nahi.")
  },3000);

const payment = new Promise ((resolve, reject)=>{
    let rand = Math.random();

    setTimeout(() => {
        
        if(rand > 0.5) {
            resolve("Payment completed successfully!");
        }
        
        else {
            reject("Payment failed!");
        }
    }, 4000);
});

payment
       .then((result) => {
        console.log(result);
       })

       .catch((error) => {
        console.log(error);
       });