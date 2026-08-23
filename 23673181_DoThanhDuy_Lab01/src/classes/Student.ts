 import { Person } from "./Person.ts";

export class Student extends Person{
    grade: string; // Thuộc tính bổ sung

    constructor(name: string, age: number, grade: string) {
        super(name, age); // Kế thừa constructor từ Person
        this.grade = grade;
    }

    // Hiển thị toàn bộ thông tin
    displayStudentInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

const s2 = new Student("Binh", 20, "A");
s2.displayStudentInfo();