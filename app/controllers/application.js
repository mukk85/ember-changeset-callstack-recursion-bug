import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import Changeset from 'ember-changeset';
import lookupValidator from 'ember-changeset-validations';
import { validatePresence } from 'ember-changeset-validations/validators';

export default class ApplicationController extends Controller {
	@service store;

	constructor(owner) {
		super(owner);
		const company = this.store.createRecord('company', {
			name: 'Acme Co',
		});

		const contact = this.store.createRecord('contact', {
			name: 'Test contact',
		});

		company.contacts.pushObject(contact);

		contact.trade = company;

		const validations = {
			message: {
				to: validatePresence(true),
				from: validatePresence(true),
			}
		};

		const obj = {
			message: {}
		};

		this.changeset = new Changeset(obj, lookupValidator(validations), validations);
		this.changeset.set('message.from', contact);
		this.changeset.validate();
	}
}
