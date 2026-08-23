export class Product {
    name:string;
    price:number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}
// Test 8:
const products8 = [
    new Product("Pen", 10),
    new Product("Laptop", 1200),
    new Product("Mouse", 45),
    new Product("Monitor", 150)
];
const expensiveProducts = products8.filter(p => p.price > 100);
console.log("Products > 100:", expensiveProducts);