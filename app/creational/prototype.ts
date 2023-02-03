abstract class Animal {
	protected age: number;
	protected weight: number;
	protected hair: number;

	constructor(age: number, weight: number, hair: number) {
		this.age = age;
		this.weight = weight;
		this.hair = hair;
	}

	setAge(age: number): void {
		this.age = age;
	}

	setWeight(weight: number): void {
		this.weight = weight;
	}

	setHair(hair: number): void {
		this.hair = hair;
	}

	getData(): void {
		console.log(`age:${this.age} weight:${this.weight} hair:${this.hair}`);
	}

	abstract clone(): Animal;
}

class Sheep extends Animal {
	shave() {
		this.hair = 2;
	}
	clone(): Sheep {
		return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
	}
}

class Cow extends Animal {
	milk() {
		this.weight -= 1;
	}
	clone(): Cow {
		return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
	}
}

const doPrototype = (): void => {
	const sheep0 = new Sheep(3, 10, 5);
	const cow0 = new Cow(10, 50, 1);
	const animals: Animal[] = [];

	animals.push(sheep0.clone());
	sheep0.shave();
	animals.push(sheep0.clone());

	animals.push(cow0.clone());
	cow0.milk();
	animals.push(cow0.clone());

	animals.forEach((animal, index) => {
		console.log("Animal: ", index);
		animal.getData();
		console.log();
	});
};

doPrototype();
