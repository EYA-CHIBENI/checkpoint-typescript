interface Vehicle{
    make : string,
    model : string,
    year : number,
    start : ()=> void
}

class Car implements Vehicle{

    make : string
    model: string
    year: number

    constructor(make : string, model : string, year : number){
        this.make = make
        this.model = model
        this.year = year
    }

    start=()=> console.log("Car engine started")
}

var kacemCar = new Car('Mercedes','e220',2026)

kacemCar.start()