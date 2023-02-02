abstract class Door {
	abstract open(): void;
}
class GasDoor extends Door {
	open(): void {
		console.log("Gas open door");
	}
}
class ElectricDoor extends Door {
	open(): void {
		console.log("Electric open door");
	}
}

abstract class Engine {
	abstract run(): void;
}
class GasEngine extends Engine {
	run(): void {
		console.log("Gas engine runninnng!");
	}
}
class ElectricEngine extends Engine {
	run(): void {
		console.log("Gas engine runninnng!");
	}
}

abstract class CarFactory {
	abstract door: Door;
	abstract engine: Engine;

	abstract buildDoor(): void;
	abstract buildEngine(): void;
}

export class GasCarFactory extends CarFactory {
	door!: Door;
	engine!: Engine;

	constructor() {
		super();
		this.buildDoor();
		this.buildEngine();
	}

	buildDoor(): void {
		this.door = new GasDoor();
	}

	buildEngine(): void {
		this.engine = new GasEngine();
	}
}

const doFactory = () => {
	const car = new GasCarFactory();
	car.door.open();
	car.engine.run();
};

doFactory();
