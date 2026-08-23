abstract class Appliance {
    abstract turnOn(): void;
}
class Fan24 extends Appliance {
    turnOn() { console.log("Fan is spinning."); }
}
class AirConditioner24 extends Appliance {
    turnOn() { console.log("AC is cooling."); }
}
// Test 24:
new Fan24().turnOn();