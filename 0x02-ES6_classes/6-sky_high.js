import Building from './5-building.js';

class SkyHighBuilding extends Building {
	constructor(sqft, floors) {
		super(sqft);
		this._floors;
	}

	get florrs() {
		return this._floors;
	}

	evacuationWarningMessage() {
		return `Evacuate slowly the ${this._floors} floors.`;
	}
}

export default SkyHighBuilding;
