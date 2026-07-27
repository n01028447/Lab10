//Part 1: Setting Up Classes

console.log(" ");
console.log(" ");
console.log(" ");
console.log("Part 1: Setting Up Classes");

class Grocery {
    constructor(name, price, number) {
        this.name = name;
        this.price = price;
        this.number = number;
    }

    getTotalVAlue() {
        return this.price * this.number;
    }

    toString() {
        console.log(`Product: ${this.name}, Price: $${this.price}, Quantity: ${this.number}, Total: $${this.getTotalVAlue()}`);
    }
}

let soap = new Grocery("Soap", 2, 3);
soap.toString();



//Part 2: Adding Inheritance

console.log(" ");
console.log(" ");
console.log(" ");
console.log("Part 2: Adding Inheritance");

class Perishalbe extends Grocery {

    constructor(name, price, number, expirationDate) {
        super(name, price, number); 
        this.expirationDate = expirationDate;
    }

    speak() {
        console.log(`Product: ${this.name}, Expiration Date: ${this.expirationDate}, Price: $${this.price}, Quantity: ${this.number}, Total: $${this.getTotalVAlue()}`);
    }
}

let tuna = new Perishalbe("Tuna", 5, 2, "Feb 01 2027");
tuna.speak();








//Part 3: Static Methods and Properties

console.log(" ");
console.log(" ");
console.log(" ");
console.log("Part 3: Static Methods and Properties");


class Grocery3 {
    constructor(name, price, number) {
        this.name = name;
        this.price = price;
        this.number = number;
    }

    getTotalVAlue() {
        return this.price * this.number;
    }

    toString() {
        console.log(`Product: ${this.name}, Price: $${this.price}, Quantity: ${this.number}, Total: $${this.getTotalVAlue()}`);
    }

    static applyDiscount(grocery, discount) {
        return `${discount * 100}% discount price: $${grocery.price * (1 - discount)}`;
    }

}

const shampoo = new Grocery3("Shampoo", 12, 2);

shampoo.toString();
console.log(Grocery3.applyDiscount(shampoo, 0.2));



class Perishalbe3 extends Grocery3 {

    constructor(name, price, number, expirationDate) {
        super(name, price, number);
        this.expirationDate = expirationDate;
    }

    speak() {
        console.log(`Product: ${this.name}, Expiration Date: ${this.expirationDate}, Price: $${this.price}, Quantity: ${this.number}, Total: $${this.getTotalVAlue()}`);
    }
}

const pasta = new Perishalbe3("Pasta", 7, 3, "Oct 31 2029");
const lentil = new Perishalbe3("Lentil", 6, 5, "Dec 12 2028");


pasta.speak();
console.log(Perishalbe3.applyDiscount(pasta, 0.1));

lentil.speak();
console.log(Perishalbe3.applyDiscount(lentil, 0.5));
