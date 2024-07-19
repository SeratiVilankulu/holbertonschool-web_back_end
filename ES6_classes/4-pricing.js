import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(namount) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = namount;
  }

  get currency() {
    return this._currency;
  }

  set currency(ncurrency) {
    if (!(ncurrency instanceof Currency)) {
      throw new TypeError('currency must be an instance of Currency');
    }
    this._currency = ncurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionrate) {
    return amount * conversionrate;
  }
}
