class Car {
	constructor(brand, motor, color) {
		this._brand = brand;
		this._motor = motor;
		this._color = color;
	}

	cloneCar() {
		return new Car(this._brand, this._motor, this._color);
	}
}

const originalCar = new Car("Toyota", "V8", "Red");
const clonedCar = originalCar.cloneCar();

console.log(clonedCar)
