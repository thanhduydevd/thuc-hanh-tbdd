class Car3 {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    displayCar(): void {
        console.log(`Car: ${this.year} ${this.brand} ${this.model}`);
    }
}

const c3 = new Car3("Toyota", "Camry", 2022);
c3.displayCar();