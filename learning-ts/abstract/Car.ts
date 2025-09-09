"use strict"
import { Vehicle } from "./Vehicle";

export class Car extends Vehicle {
    constructor(make: string, model: string, color: string) {
        super(make, model, color); //call parent constructor
    }

    startEngine(): void {
        console.log(`Car ${this.make} engine started`);
    }

    getModel(): void {
        console.log(`Car ${this.make} model: ${this.model}`);
    }
    displayInfo(): void {
        console.log(`Car: ${this.make}, Model: ${this.model}, Color: ${this.color}`);
    }
}

let toyota = new Car("toyoka", "2025", "red");

console.log('toyota', toyota);