class Employee {
    name: string;
    salary: number;
    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }
}
class Manager extends Employee {
    manage(): void { console.log(`${this.name} is managing the team.`); }
}
class Developer extends Employee {
    writeCode(): void { console.log(`${this.name} is writing code.`); }
}
// Test 14:
new Manager("Alice", 5000).manage();
new Developer("Bob", 4000).writeCode();
