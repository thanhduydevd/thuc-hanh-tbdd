class AnimalKeThua {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
class Dog11 extends AnimalKeThua {
    bark(): void { console.log(`${this.name} says: Bark!`); }
}
class Cat11 extends AnimalKeThua {
    meow(): void { console.log(`${this.name} says: Meow!`); }
}

new Dog11("Rex").bark();
new Cat11("Luna").meow();
