class Airport {
	constructor(name, code) {
		this._name = name;
		this._code = code;
	}

	toString() {
		return this._code;
	}
}

const airport = new Airport('Kenya Airways, The pride of Africa');
console.log(airport.toString());
