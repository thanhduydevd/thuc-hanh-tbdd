import { Person } from "./Person.ts";

export class Teacher extends Person {
    subject: string;
    constructor(name: string, age: number, subject: string) {
        super(name, age);
        this.subject = subject;
    }
    introduce(): void {
        console.log(`Hi, I'm ${this.name}, and I teach ${this.subject}.`);
    }
}
// Test 27:
new Teacher("Mr. Smith", 40, "Mathematics").introduce();