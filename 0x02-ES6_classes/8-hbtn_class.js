class HolbertonClass {
	constructor(size, location) {
		this._size = size;
		this._location = location;
	}

	valueOf() {
		return this._size;
	}

	toString() {
		return this._location;
	}
}

const school = new HOlbertonClass(100, 'Nairobi Kenya');
console.log(Number(school));
console,log(String(school));
