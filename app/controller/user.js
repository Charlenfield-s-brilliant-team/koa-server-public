const template = require('./public/ErrorTemplate');
const ControllerBase = require('../../core/index').BASE.ControllerBase;

class UserController extends ControllerBase {

	async afterInit() {
		
	}
	/**
	 * 用户注册
	 * @param {*}  data
	 */
	async signup(data) {
		console.log(data)
		this.checkKeyExists(data, 'phoneNumber');
		// template.error.call(this,'sqlerror');
		// this.error(123,"aaaa");
		return true;
	}

}
module.exports = UserController;