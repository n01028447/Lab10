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

let soap = new Grocery("Soap", 2, 3);
soap.toString();

class Perishalbe extends Grocery {

    constructor(name, price, number, expirationDate) {
        super(name, price, number); // Call the parent constructor
        this.expirationDate = expirationDate;
    }

    speak() {
        console.log(`Product: ${this.name}, Expiration Date: ${this.expirationDate}, Price: $${this.price}, Quantity: ${this.number}, Total: $${this.getTotalVAlue()}`);
    }
}

let tuna = new Perishalbe("Tuna", 5, 2, "Feb, 01 2027")
tuna.speak();

