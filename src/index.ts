console.log('Hello people');

// class User {
    // private name: string;
    // public age: number;
    //
    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    // }

//     constructor(private name: string, private age: number) {
//     }
//
//     getName(): string{
//         return this.name
//     }
// }
//
// let user = new User('Oleg', 33 );
// console.log(user.getName());
//
// const users: User[] = [
//     new User('Chacha', 22),
//     new User('kokos', 30),
// ];
// console.log(users);
interface IElectric{
    enginePower: number;

    getLedStatus(): boolean;
}
class Car implements IElectric {
    enginePower: number;
    constructor(private brand: string, private model: string, private year: number, enginePower: number) {
        this.enginePower = enginePower
    }

    getLedStatus(): boolean {
    return true;
    }

    start():void{
        console.log('Fafafa...');
    }

    getInfo():void{
        console.log(`Brand: ${this.brand} -- Model: ${this.model} -- year: ${this.year}`);
    }
}
let car = new Car('Audi', 'Q7', 2023, 2.5);
car.getInfo();
car.start();
// class ElectroCar extends Car{
//
//     constructor(brand: string, model: string, year: number, private enginePower: number) {
//         super(brand, model, year);
//     }
// }

abstract class Shape{
    abstract perimeter():number;

    abstract area():number;
}
class Triangle extends Shape {
    constructor(private a: number, private b: number, private c: number) {
        super();
    }
    perimeter(): number {
        return this.a + this.b + this.c;
    }

    area(): number {
        return 1/2*this.a*this.b;
    }
}
class Rectangle extends Shape{
    constructor(private a: number, private b: number) {
        super();
    }

    perimeter(): number {
        return this.a + this.b * 2;
    }

    area(): number {
        return this.a + this.b;
    }
}
const shapes: Shape[] = [
    new Triangle(3,5,8),
    new Rectangle(5,10),
    new Triangle(12,8, 7),
];
for (const shape of shapes) {
    console.log(shape.constructor['name']);
    console.log(shape.area());
    console.log(shape.perimeter());
}