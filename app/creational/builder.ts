abstract class Entree {
	name: string;
	constructor(name: string) {
		this.name = name;
		this.cook();
	}

	abstract cook(): void;
}

class Hotdog extends Entree {
	cook(): void {
		console.log("Coocking salsaches");
	}
}

class FriedChicken extends Entree {
	cook(): void {
		console.log("adobing chicken");
	}
}

abstract class Side {
	name: string;
	constructor(name: string) {
		this.name = name;
		this.cook();
	}

	abstract cook(): void;
}

class Salad extends Side {
	cook(): void {
		console.log("Cleaning the lethus");
	}
}

class Fries extends Side {
	cook(): void {
		console.log("peeling potatoes");
	}
}

abstract class Drink {
	name: string;
	constructor(name: string) {
		this.name = name;
		this.cook();
	}

	abstract cook(): void;
}

class Coffee extends Drink {
	cook(): void {
		console.log("Grinding the cafee beans");
	}
}

abstract class MealBuilder {
	protected mealCombo: MealCombo;
	abstract entree: Entree;
	abstract side: Side;
	abstract drink: Drink;
	constructor() {
		this.mealCombo = new MealCombo();
	}

	abstract cookEntree(): void;
	abstract cookSide(): void;
	abstract fillDrink(): void;

	public getMeal(): MealCombo {
		return this.mealCombo;
	}
}

class ChickenCombo extends MealBuilder {
	mealCombo!: MealCombo;
	entree!: Entree;
	side!: Side;
	drink!: Drink;

	cookEntree(): void {
		this.entree = new FriedChicken("Fried Chicken");
		console.log("Entree done");
		this.mealCombo.setEntree(this.entree);
	}
	cookSide(): void {
		this.side = new Fries("Fries");
		console.log("Side done");
		this.mealCombo.setSide(this.side);
	}
	fillDrink(): void {
		this.drink = new Coffee("Hot Coffee");
		console.log("Drink done");
		this.mealCombo.setDrink(this.drink);
	}
}

class HotdogCombo extends MealBuilder {
	mealCombo!: MealCombo;
	entree!: Entree;
	side!: Side;
	drink!: Drink;

	cookEntree(): void {
		this.entree = new Hotdog("Hotdog");
		console.log("Entree done");
		this.mealCombo.setEntree(this.entree);
	}
	cookSide(): void {
		this.side = new Salad("Salad");
		console.log("Side done");
		this.mealCombo.setSide(this.side);
	}
	fillDrink(): void {
		this.drink = new Coffee("Hot Coffee");
		console.log("Drink done");
		this.mealCombo.setDrink(this.drink);
	}
}

class MealCombo {
	private entree!: Entree;
	private side!: Side;
	private drink!: Drink;

	setEntree(entree: Entree) {
		this.entree = entree;
	}
	setSide(side: Side) {
		this.side = side;
	}
	setDrink(drink: Drink) {
		this.drink = drink;
	}

	readMeal() {
		console.log(
			`${this.entree.name} with ${this.side.name} and ${this.drink.name}`,
		);
	}
}

const doBuilder = () => {
	const chicken = new ChickenCombo();
	const hotdog = new HotdogCombo();
	let meal = new MealCombo();

	chicken.cookEntree();
	chicken.cookSide();
	chicken.fillDrink();
	meal = chicken.getMeal();
	meal.readMeal();

	console.log("------");

	hotdog.cookEntree();
	hotdog.cookSide();
	hotdog.fillDrink();
	meal = hotdog.getMeal();
	meal.readMeal();
};

doBuilder();
