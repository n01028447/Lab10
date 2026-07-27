//Part 1: Setting Up Classes
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

    static applyDiscount(price, discount) {
        return price * (1 - discount);
    }
}

let soap = new Grocery("Soap", 2, 3);
let shampoo = new Grocery("Shampoo", 9, 2);

soap.toString();
console.log(`Discount price: $${Grocery.applyDiscount(soap.price, 0.1)}`);

shampoo.toString();
console.log(`Discount price: $${Grocery.applyDiscount(shampoo.price, 0.2)}`);





