export class Person {
    //Thuộc tính name và age
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name; 
        this.age = age;   
    }

    // Phương thức hiển thị thông tin
    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// const p1 = new Person("Duy", 22);
// p1.displayInfo();