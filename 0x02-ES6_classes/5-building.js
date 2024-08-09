class Building {
	constructor(sqft) {
		if(new.target === Building) {
			throw new Error('Building is abstract class and cannot be instantiated directly.');
		}
		this._sqft = sqft;
	}

	get sqft() {
		return this._sqft;
	}
evacuationWarningMessage() {
	throw new Error('Class extending Building must override evacuationWarningMessage');
}
}

class OfficeBuilding extends Building {
}

try {
	const residentialBuilding = new ResidentialBuilding(1200);
	cinsole.log(residentialBuilding.sqft);
	console.log(residentialBuilding.evacuationWarningMessage());

	const officeBuilding = new OfficeBuilding(3000);
	console.log(officeBuilding.sqft);
	console.log(officeBuilding.evacuationWarningMessage());
} catch(error) {
	console.error(error.message);
