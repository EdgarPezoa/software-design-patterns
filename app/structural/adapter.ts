interface VehiclePriceCalculator {
	calculatePrice(): string;
}

class Car implements VehiclePriceCalculator {
	private km: number;
	private age: number;
	private price: number;

	constructor(km: number, age: number) {
		this.km = km;
		this.age = age;
		this.price = 10000;
	}

	calculatePrice(): string {
		const value = this.price - this.age - this.km;
		return `${value} USD`;
	}
}

class Truck implements VehiclePriceCalculator {
	private trips: number;
	private age: number;
	private price: number;

	constructor(trips: number, age: number) {
		this.trips = trips;
		this.age = age;
		this.price = 10000;
	}

	calculatePrice(): string {
		const value = this.price - this.age - this.trips * 3;
		return `${value} USD`;
	}
}

enum ExternalVehicleCalculatorModels {
	"BMW" = 10000,
	"TOYOTA" = 3000,
	"KIA" = 5000,
}

class ExternalVehicleCalculator {
	private model: keyof typeof ExternalVehicleCalculatorModels;
	private age: number;

	constructor(
		model: keyof typeof ExternalVehicleCalculatorModels,
		age: number,
	) {
		this.model = model;
		this.age = age;
	}
	getPrice(): number {
		return ExternalVehicleCalculatorModels[this.model] - this.age;
	}
}

class ExternalVehicleCalculatorAdapter implements VehiclePriceCalculator {
	externalVehicleCalculator: ExternalVehicleCalculator;

	constructor(externalVehicleCalculator: ExternalVehicleCalculator) {
		this.externalVehicleCalculator = externalVehicleCalculator;
	}

	calculatePrice(): string {
		return `${this.externalVehicleCalculator.getPrice()} CLP`;
	}
}

const printVehiclePrice = (vehiclePriceCalculator: VehiclePriceCalculator) => {
	console.log(vehiclePriceCalculator.calculatePrice());
};

const doAdapter = () => {
	const car: Car = new Car(1000, 2000);
	const truck: Truck = new Truck(10, 2003);
	const foreignVehicle: ExternalVehicleCalculator =
		new ExternalVehicleCalculator("KIA", 2018);
	const foreignVehicleAdapter = new ExternalVehicleCalculatorAdapter(
		foreignVehicle,
	);

	printVehiclePrice(car);
	printVehiclePrice(truck);
	// printVehiclePrice(foreignVehicle); THIS RESULT ON ERROR
	printVehiclePrice(foreignVehicleAdapter);
};

doAdapter();
