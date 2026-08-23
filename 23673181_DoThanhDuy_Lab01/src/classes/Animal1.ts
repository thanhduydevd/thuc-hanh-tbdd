class Animal {
    protected makeSound(): void { console.log("Animal sound"); }
}
class Dog extends Animal {
    makeSound(): void { console.log("Woof!"); } // Ghi đè phương thức protected
}
// Test 28:
new Dog().makeSound();