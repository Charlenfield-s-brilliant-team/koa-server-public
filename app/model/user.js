const ThirdAuth=require('../../core/DB/DaoBase');

class user extends DaoBase{

	constructor() {
		super()
	}

	init(){
		console.log(this.models)
		return 'model';
	}
}

module.exports = user;