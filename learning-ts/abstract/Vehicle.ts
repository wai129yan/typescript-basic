export abstract class Vehicle {
    constructor(public make: string, public model: string, public color: string) { }

    abstract startEngine(): void;
    abstract getModel(): void;

    displayInfo(): void {
        console.log(`Vehicle: ${this.make}, Model: ${this.model}, Color: ${this.color}`);
    }
}
