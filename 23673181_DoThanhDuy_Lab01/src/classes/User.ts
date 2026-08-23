export class User {
    private _name: string; // Thuộc tính private

    constructor(name: string) {
        this._name = name;
    }

    // Getter
    get name(): string {
        return this._name;
    }

    // Setter
    set name(newName: string) {
        if (newName.trim() !== "") {
            this._name = newName;
        }
    }
}

const u7 = new User("John");
u7.name = "Doe"; // Dùng setter
console.log(`User name: ${u7.name}`);