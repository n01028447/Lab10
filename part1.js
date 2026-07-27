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

