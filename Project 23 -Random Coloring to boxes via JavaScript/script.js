console.log("Hello, The Code is Running!");

const boxes = document.querySelectorAll(".box");


function changeColor() {

    let val1 = Math.floor(Math.random() * 255);
    let val2 = Math.floor(Math.random() * 255);
    let val3 = Math.floor(Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

Array.from(boxes).forEach(box => {

    box.style.backgroundColor = changeColor();
    box.style.color = changeColor();

    });