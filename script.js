

class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.isVehicle = true;
    }

    honk(){
        return "Beep.";
    }

    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine(){
        return "VROOM!!!";
    }
}

class Garage {
    constructor(capacity){
        this.capacity = capacity;
        this.vehicles = [];
    }

    add(newCar){
        if(newCar.isVehicle){
            if(this.vehicles.length < this.capacity){
                this.vehicles.push(newCar);
                return "Vehicle added!";
            }
            else{
                return "Sorry, we're full.";
            }
        }
        else{
            return "Only vehicles are allowed in here!";
        }
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
let myFirstCar = new Car("Toyota", "Corolla", 2005);
let garage = new Garage(2);