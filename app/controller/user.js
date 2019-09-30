const template = require('./public/ErrorTemplate');

class UserController{
	async afterInit() {
		
	}
	/**
	 * 用户注册
	 * @param {*}  data
	 */
	async signup(data) {
		// template.error.call(this,'sqlerror');
		
		console.log(this.models);
		return true;
	}

}
module.exports = new UserController();
