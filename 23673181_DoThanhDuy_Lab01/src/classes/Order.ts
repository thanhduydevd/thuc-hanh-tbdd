import { Product } from "./Product.ts";

class Order {
    private products: Product[] = [];
    addProduct(p: Product): void { this.products.push(p); }
    getTotal(): number {
        return this.products.reduce((sum, p) => sum + p.price, 0);
    }
}
// Test 26:
const order = new Order();
order.addProduct(new Product("Book", 20));
order.addProduct(new Product("Pen", 5));
console.log("Total Order Price:", order.getTotal());