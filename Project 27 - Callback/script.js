
const btn = document.querySelector('button');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const result = document.querySelector('#result');

function sum(a, b) {
    console.log(a + b);
}

btn.addEventListener('click', function() {
    let a = parseFloat(num1.value) || 0;
    let b = parseFloat(num2.value) || 0;
    result.value = a + b;
    sum(a, b);
    result.textContent = "The Result is: " + result.value;
});