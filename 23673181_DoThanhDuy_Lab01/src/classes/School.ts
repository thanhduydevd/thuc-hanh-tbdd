import { Student } from "./Student.ts";
import { Teacher } from "./Teacher.ts";

class School {
    students: Student[] = [];
    teachers: Teacher[] = [];

    displaySchoolInfo(): void {
        console.log(`School has ${this.students.length} students and ${this.teachers.length} teachers.`);
    }
}
// Test 30:
const school = new School();
school.students.push(new Student("Alice", 15, "10th"));
school.teachers.push(new Teacher("Bob", 35, "Physics"));
school.displaySchoolInfo();