//Part 3: Static Methods and Properties
class Grocery1 {
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

let soap = new Grocery1("Soap", 2, 3);
let shampoo = new Grocery1("Shampoo", 9, 2);

soap.toString();
console.log(`Discount price: $${Grocery1.applyDiscount(soap.price, 0.1)}`);

shampoo.toString();
console.log(`Discount price: $${Grocery1.applyDiscount(shampoo.price, 0.2)}`);





