const num = document.querySelector("#num");
const checkBtn = document.querySelector("#check");
const score = document.querySelector("#result");

checkBtn.addEventListener("click", function () {
    const number = Number(num.value);


    if (number >= 480) {
        score.textContent = "The Student Passed: " + number;
    } 
    else {
        score.textContent = "The Student Failed: " + number;
    }
});