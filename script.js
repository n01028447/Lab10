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

const soap = new Grocery("Soap", 2, 3);
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

const tuna = new Perishalbe("Tuna", 5, 2, "Feb 01 2027");
const sardine = new Perishalbe("Sardine", 2, 8, "May 30 2027");

tuna.speak();
sardine.speak();








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


//Part 4: Store Management

console.log(" ");
console.log(" ");
console.log(" ");
console.log("Part 4: Store Management");


class Grocery4 {
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

    static inventory = 0;
    static addProduct(grocery) {
        Grocery4.inventory = Grocery4.inventory + grocery.number
    }

    static getInventoryValue() {
        console.log(`Non-perishable inventory: ${Grocery4.inventory}`);
    }

    static findProductByName(name) {
        console.log(`Product Name: ${name.name}, Price: $${name.price}, Number: ${name.number}`);
    }

}

const sponge = new Grocery4("Sponge", 3.5, 2);
const detergent = new Grocery4("Detergent", 15, 3);

Grocery4.addProduct(sponge);
Grocery4.addProduct(detergent);
Grocery4.addProduct(detergent);
Grocery4.getInventoryValue();



class Perishalbe4 extends Grocery4 {

    constructor(name, price, number, expirationDate) {
        super(name, price, number);
        this.expirationDate = expirationDate;
    }

    speak() {
        console.log(`Product: ${this.name}, Expiration Date: ${this.expirationDate}, Price: $${this.price}, Quantity: ${this.number}, Total: $${this.getTotalVAlue()}`);
    }

    static getInventoryValue() {
        console.log(`Total inventory: ${Perishalbe4.inventory}`);
    }
}

const beans = new Perishalbe4("Beans", 5.5, 6, "Oct 31, 2029");
const rice = new Perishalbe4("Rice", 7.5, 1, "Dec 12, 2028");

Perishalbe4.addProduct(beans);
Perishalbe4.addProduct(beans);
Perishalbe4.addProduct(rice);
Perishalbe4.addProduct(rice);
Perishalbe4.addProduct(rice);
Perishalbe4.getInventoryValue();

try {
    Grocery4.findProductByName(rice);
    Grocery4.findProductByName(cream);
} catch {
    console.log("Product not found!");
}

//Part 5: Testing the System

console.log(" ");
console.log(" ");
console.log(" ");
console.log("Part 5: Testing the System");


class Groceries {
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

    static inventory = 0;
    static cost = 0;
    static addProduct(grocery) {
        Groceries.inventory = Groceries.inventory + grocery.number
        Groceries.cost = Groceries.cost + (grocery.price * grocery.number)
    }

    static getInventoryValue() {
        console.log(`Total inventory: ${Groceries.inventory}`);
        console.log(`Total cost: $${Groceries.cost}`);
    }

    static findProductByName(name) {
        console.log(`Product Name: ${name.name}, Price: $${name.price}, Number: ${name.number}`);
    }

}


class Perishalbes extends Groceries {

    constructor(name, price, number, expirationDate) {
        super(name, price, number);
        this.expirationDate = expirationDate;
    }

    speak() {
        console.log(`Product: ${this.name}, Expiration Date: ${this.expirationDate}, Price: $${this.price}, Quantity: ${this.number}, Total: $${this.getTotalVAlue()}`);
    }
}

const paperTowel = new Groceries("Paper Towel", 6.5, 5);
const bleach = new Groceries("Bleach", 12.5, 3);
const borax = new Groceries("Borax", 8.5, 2);

const salmon = new Perishalbes("Salmon", 20.5, 7, "Aug 31, 2026");
const oatmeal = new Perishalbes("Oatmeal", 5.5, 1, "Dec 12, 2028");

Groceries.addProduct(paperTowel);
Groceries.addProduct(bleach);
Groceries.addProduct(borax);
Perishalbes.addProduct(salmon);
Perishalbes.addProduct(oatmeal);

Groceries.getInventoryValue();

try {
    Groceries.findProductByName(paperTowel);
    Perishalbes.findProductByName(oatmeal);
    Perishalbes.findProductByName(cream);
} catch {
    console.log("Product not found!");
}
