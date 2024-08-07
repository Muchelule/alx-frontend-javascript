import Currency from './3-currency.js';

class Pricing {
	constructor(amount, currency) {
		this.amount = amount;
		this.currency = currency;
	}

	get amount() {
		return this._amount;
	}

	set amount(newAmount) {
		this._amount = newAmount;
	}

	get currency() {
		return this._currency = newCurrency;
	}

	set currency(newCurrency) {
		this._currency = newCurrency;
	}

	displayFullPrice() {
		return `${this._amount} ${this._currency.name} (${this._currency.code})`;
	}

	static convertPrice(amount, conversionRate) {
		return amount * conversionRate;
	}
}

export default Pricing;
