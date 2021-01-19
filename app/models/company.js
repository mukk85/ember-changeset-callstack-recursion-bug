import Model, { hasMany, attr } from '@ember-data/model';

export default class CompanyModel extends Model {
	@attr('string') name;
	@hasMany('contact') contacts;
}
