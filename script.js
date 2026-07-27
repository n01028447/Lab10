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

let tuna = new Perishalbe("Tuna", 5, 2, "Feb, 01 2027");
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

    static applyDiscount(price, discount) {
        return price * (1 - discount);
    }
}


let shampoo = new Grocery3("Shampoo", 9, 2);

shampoo.toString();
console.log(`Discount price: $${Grocery3.applyDiscount(shampoo.price, 0.2)}`);


class Perishalbe3 extends Grocery3 {

    constructor(name, price, number, expirationDate) {
        super(name, price, number);
        this.expirationDate = expirationDate;
    }

    speak() {
        console.log(`Product: ${this.name}, Expiration Date: ${this.expirationDate}, Price: $${this.price}, Quantity: ${this.number}, Total: $${this.getTotalVAlue()}`);
    }
}


let pasta = new Perishalbe3("Pasta", 7, 3, "Oct 31, 2029");
let lentil = new Perishalbe3("Lentil", 6, 5, "Dec 12, 2028");

pasta.speak();
console.log(`Discount price: $${Perishalbe3.applyDiscount(pasta.price, 0.4)}`);

lentil.speak();
console.log(`Discount price: $${Perishalbe3.applyDiscount(lentil.price, 0.5)}`);
