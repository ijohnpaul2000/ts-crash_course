class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log("driving a car");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
const car = new Car("orange");
const vehicle = new Vehicle("blue");

car.startDrivingProcess();
console.log(vehicle.color);
