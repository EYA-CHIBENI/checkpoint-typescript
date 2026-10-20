"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start = () => console.log("Car engine started");
}
var kacemCar = new Car('Mercedes', 'e220', 2026);
kacemCar.start();
//# sourceMappingURL=script.js.map