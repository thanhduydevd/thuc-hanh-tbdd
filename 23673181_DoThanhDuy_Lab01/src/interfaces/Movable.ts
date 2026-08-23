interface Movable { move(): void; }
class Car implements Movable { move() { console.log("Car is driving."); } }
class Robot implements Movable { move() { console.log("Robot is walking."); } }
// Test 29:
new Car().move();
new Robot().move();
