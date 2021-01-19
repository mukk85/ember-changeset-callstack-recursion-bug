import Model, { belongsTo, attr } from '@ember-data/model';
import { tracked } from '@glimmer/tracking';

export default class ContactModel extends Model {
	@attr('string') name;
	@belongsTo('company') company;

	@tracked _trade;

	get trade() {
		return this._trade;
	}

	set trade(c) {
		this._trade = c;
	}
}
