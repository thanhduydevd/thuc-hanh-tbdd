class Animal19 {
    makeSound(): void { console.log("Some generic animal sound"); }
}
class Duck19 extends Animal19 {
    makeSound(): void { console.log("Quack Quack"); }
}
// Test 19:
const myAnimal: Animal19 = new Duck19();
myAnimal.makeSound(); // Gọi phương thức của Duck