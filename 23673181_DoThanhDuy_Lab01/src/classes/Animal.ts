interface Animal {
    name: string;
    sound(): void;
}

class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    sound(): void { console.log("Woof Woof"); }
}
const d9 = new Dog("Chappy");
d9.sound();
