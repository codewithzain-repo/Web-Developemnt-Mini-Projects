// console.log("Hello, Today we are discussing Event Listeners in JavaScript!");

// const title = document.getElementById("title");
// const changeTitleButton = document.getElementById("changeTitleButton");

// // Click Event Listener

// changeTitleButton.addEventListener("click", function() {
//     title.textContent = "Title Changed!";
//     // title.innerHTML = "Title Changed!";
//     console.log("Title has been changed.");
// });

// // Mouseover Event Listener

// changeTitleButton.addEventListener("mouseover", function() {
//     title.textContent = "Mouse Over Detected!";
//     console.log("Mouse is over the button.");
// });

// // Mouseout Event Listener

// changeTitleButton.addEventListener("mouseout", function() {
//     title.textContent = "Mouse Out Detected!";
//     console.log("Mouse has left the button.");
// });

// // Keydown Event Listener

// document.addEventListener("keydown", function(event) {
//     title.textContent = `Key Pressed: ${event.key}`;
//     console.log(`Key pressed: ${event.key}`);
// });

// // Form Submit Event Listener

// const form = document.getElementById("myForm");
// const inputField = document.getElementById("inputField");

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     title.textContent = `Input Value: ${inputField.value}`;
//     console.log(`Form submitted with value: ${inputField.value}`);
// });

// // Change Event Listener

// inputField.addEventListener("change", function() {
//     title.textContent = `Input Value: ${inputField.value}`;
//     console.log(`Input value changed to: ${inputField.value}`);
// });


// // Focus and Blur Event Listeners

// inputField.addEventListener("focus", function() {
//     title.textContent = "Input Field Focused!";
//     console.log("Input field is focused.");
// });

// inputField.addEventListener("blur", function() {
//     title.textContent = "Input Field Blurred!";
//     console.log("Input field is blurred.");
// });

// // Resize Event Listener

// window.addEventListener("resize", function() {
//     title.textContent = "Window Resized!";
//     console.log("Window has been resized.");
// });


// // Scroll Event Listener

// window.addEventListener("scroll", function() {
//     title.textContent = "Window Scrolled!";
//     console.log("Window has been scrolled.");
// });

// // Load Event Listener

// window.addEventListener("load", function() {
//     title.textContent = "Page Loaded!";
//     console.log("Page has been loaded.");
// });

// // Unload Event Listener

// window.addEventListener("beforeunload", function(event) {
//     title.textContent = "Page Unloaded!";
//     console.log("Page is about to be unloaded.");
// });

// Event Bubbling Concept
const parentBox = document.querySelectorAll(".container").forEach(function(box) {
    box.addEventListener("click", function(e) {
        alert("Parent Box Clicked!");
        e.stopPropagation()

    });
});

const box1 = document.querySelector(".box1").addEventListener("click", function(e) {

    alert("Box 1 Clicked!");
    e.stopPropagation()
});


const box2 = document.querySelector(".box2").addEventListener("click", function(e) {
    alert("Box 2 Clicked!");
    e.stopPropagation();
})


// SetInterval Function

function changeColor() {

    let val1 = Math.floor(Math.random() * 255);
    let val2 = Math.floor(Math.random() * 255);
    let val3 = Math.floor(Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

setInterval(() => {


    document.querySelector(".container").style.backgroundColor = changeColor();
    
}, 1000);
setInterval(() => {


    document.querySelector(".box1").style.backgroundColor = changeColor();
    
}, 1000);

setInterval(() => {


    document.querySelector(".box2").style.backgroundColor = changeColor();
    
}, 1000);
