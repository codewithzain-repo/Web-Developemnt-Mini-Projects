// Object

const car ={
    "brand" : "Toyota",
    "color" : "Black",
    "speed" : "120",
    "start" : function(){
        console.log("Car Started!")
    }

};

console.log("The Car's Brand =",car.brand)
console.log("The Car's color =" ,car.color)
console.log("The Car's speed =" ,car.speed)
console.log(car.start)

// Class

class Car {
    constructor(brand, color){
        this.brand = brand;
        this.color = color;
    }
    start(){
        console.log(this.brand + " started!");
    }
}

const car1 = new Car("Toyota", "Red")
const car2 = new Car("Honda", "Black")

console.log(car1.brand)
console.log(car2.brand)

console.log(car1.color)
console.log(car2.color)

console.log(car1.start());
console.log(car2.start());


/* Task: Mobile Phone Class

Ek Mobile class banao jis mein:
1. constructor() do parameters le: brand aur price.
2. Dono ko object ki properties mein store karo.
3. showDetails() naam ka method banao.
4. Method brand aur price console mein print kare.
5. Do objects banao: Samsung (50000) aur iPhone (200000).
6. Dono objects ka showDetails() method call karo. */

class Mobile{
    constructor(brand, price){
        this.brand = brand;
        this.price = price;
    }

    showDetails(){
        console.log(`The Brand is ${this.brand} and the Price is ${this.price}`);
    }
};

const mobile_1 = new Mobile("Samsung", "Rs. 50000");
const mobile_2 = new Mobile("iPhone", "Rs. 200000");

mobile_1.showDetails();
mobile_2.showDetails();

// Task 2

class Hacker {
    constructor(name, skill) {
        this.name = name;
        this.skill = skill;
        this.level = 0;
    }

    flex() {
        this.level += 1;

        return `
 Hacker : ${this.name}
 Skill  : ${this.skill}
 Level  : ${this.level}
 Status : OP MODE ACTIVATED

"Code likhta hoon, bugs khud resign kar dete hain." 😎
        `;
    }
}

const zain = new Hacker("Zain", "JavaScript OOP");

console.log(zain.flex());
console.log(zain.flex());