abstract class Shape13 {
    abstract area(): number; // Bắt buộc lớp con phải định nghĩa lại
}
class Square13 extends Shape13 {
    side: number;
    constructor(side: number) { 
        super(); 
        this.side = side;
    }
    area(): number { return this.side * this.side; }
}
class Circle13 extends Shape13 {
    radius: number;
    constructor(radius: number) { 
        super(); 
        this.radius = radius;
    }
    area(): number { return Math.PI * this.radius * this.radius; }
}

console.log("Square Area:", new Square13(4).area());
console.log("Circle Area:", new Circle13(3).area());