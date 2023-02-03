class Leader {
	private static _instance: Leader;
	private constructor() {
		console.log("New leader elected");
	}

	public static getInstance(): Leader {
		if (this._instance == undefined) {
			this._instance = new Leader();
		}
		return this._instance;
	}

	bribe() {
		console.log("I GIVE YOU $10.000 DOLAS FOR YOUR VOTE");
	}

	steal() {
		console.log("GETTING PEOPLE'S SAVINGS");
	}
}

const doSingleton = (): void => {
	const politician = Leader.getInstance();
	politician.bribe();

	const example = Leader.getInstance();
	example.steal();
};

doSingleton();
