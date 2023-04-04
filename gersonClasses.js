
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log('Vroom!');
    }
}

class Car extends Vehicle {
    constructor(make, model, year, numWheels){
        super(make, model, year)
        this.numWheels = numWheels;
    }

    drive() {
        console.log(`Driving ${this.numWheels} wheels`)
    }
}

const car = new Car('Toyota', 'Corolla', '2022', 4);

car.start();
car.drive();

class Boat extends Vehicle {
    constructor(make, model, year, numSails){
        super(make, model, year)
        this.numSails = numSails;
    }
    
    sail() {
        console.log(`I have ${this.numSails} Sails!`)
    }
}

const boat = new Boat('Mariner', 'Boatie', '1980', 7);

boat.sail();

/* Section Divide */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello my name is ${this.name}.`;
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age)
        this.major = major;
    }

    study() {
        return `I'm studying ${this.major}.`;
    }
}

const student = new Student('John Doe', '20', 'Computer Science');

student.greet();
student.study();

class TeacherAssistant extends Student {
    constructor(name, age, major, payRate){
        super(name, age, major)
        this.payRate = payRate;
    }

    startClass() {
        console.log(`${this.greet()} ${this.study()} I am ${this.age} years old, and i only make ${this.payRate} dollars! I quit..`)
    }
}

const joshTA = new TeacherAssistant('Josh', 29, 'Computer Science', 10);

joshTA.startClass();
