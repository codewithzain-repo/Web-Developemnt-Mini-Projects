console.log("Hello, Today we are discussing Event Listeners in JavaScript!");

const title = document.getElementById("title");
const changeTitleButton = document.getElementById("changeTitleButton");

changeTitleButton.addEventListener("click", function() {
    title.textContent = "Title Changed!";
    console.log("Title has been changed.");
});