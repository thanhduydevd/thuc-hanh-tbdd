interface Flyable12 { fly(): void; }
interface Swimmable12 { swim(): void; }

class Bird12 implements Flyable12 {
    fly(): void { console.log("Bird is flying"); }
}
class Fish12 implements Swimmable12 {
    swim(): void { console.log("Fish is swimming"); }
}

new Bird12().fly();
new Fish12().swim();