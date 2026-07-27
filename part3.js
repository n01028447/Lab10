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





class Perishalbe extends Grocery1 {

    constructor(name, price, number, expirationDate) {
        super(name, price, number);
        this.expirationDate = expirationDate;
    }

    speak() {
        console.log(`Product: ${this.name}, Expiration Date: ${this.expirationDate}, Price: $${this.price}, Quantity: ${this.number}, Total: $${this.getTotalVAlue()}`);
    }
}

let tuna = new Perishalbe("Tuna", 5, 2, "Feb 01, 2027");
let pasta = new Perishalbe("Pasta", 7, 3, "Oct 31, 2029");
let lentil = new Perishalbe("Lentil", 6, 5, "Dec 12, 2028");

tuna.speak();
console.log(`Discount price: $${Perishalbe.applyDiscount(tuna.price, 0.5)}`);

pasta.speak();
console.log(`Discount price: $${Perishalbe.applyDiscount(pasta.price, 0.4)}`);

lentil.speak();
console.log(`Discount price: $${Perishalbe.applyDiscount(lentil.price, 0.3)}`);





