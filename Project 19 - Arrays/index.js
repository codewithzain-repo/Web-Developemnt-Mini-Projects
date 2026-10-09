// Javascript Arrays

let a = [1, 2, 3, 4, 5];

a[0] = 10; // Modify the first element

// Accessing elements
console.log(a[0]); // 10
console.log(a[2]); // 3
console.log(a[4]); // 5

console.log(a.length); // 5

const fruits = ['apple', 'banana', 'cherry'];

// Adding elements
fruits.push('date'); // Add to the end
fruits.unshift('avocado'); // Add to the beginning

console.log(fruits); // ['avocado', 'apple', 'banana', 'cherry', 'date']

// Removing elements
fruits.pop('cherry'); // Remove from the end
fruits.shift('apple'); // Remove from the beginning    
console.log(fruits);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Iterating over an array
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Using forEach
numbers.forEach(function (number) {
    console.log(number);
});

let squares = numbers.map(function (number) {
    return number * number;
});
console.log(squares); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

let n = [10, 8, 6, 4, 2];
console.log(n)
console.log(n.toString()); // "10,8,6,4,2"

let c = [1, 2, 3, 4, 5];
let d = [6, 7, 8, 9, 10];
let e = c.concat(d);
let f = e.join('-');
console.log(e); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(f); // "1-2-3-4-5-6-7-8-9-10"

let g = [1, 2, 3, 4, 5];
let h = g.slice(1, 5);
console.log(h); // [2, 3, 4, 5]

let i = [1, 2, 3, 4, 5];
let j = i.splice(1, 3, 10, 20, 30);
console.log(i); // [1, 10, 20, 30, 5]
console.log(j); // [2, 3, 4]

let k = [1, 2, 3, 4, 5];
let l = k.filter(function (number) {
    return number > 2;
});
console.log(l); // [3, 4, 5]

let m = [1, 2, 3, 4, 5];
let n = m.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(n); // 15