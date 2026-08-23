interface Vehicle { start(): void; }
class Car20 implements Vehicle { start() { console.log("Car engine started"); } }
class Bike20 implements Vehicle { start() { console.log("Bike is ready to ride"); } }
// Test 20:
new Car20().start();
new Bike20().start();