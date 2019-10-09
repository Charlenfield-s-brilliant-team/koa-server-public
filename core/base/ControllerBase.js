const SimpleError = require("./SimpleError");
class ControllerBase{
    setDao(dao){
    	this.dao = dao;
    }

    set public(obj){
    	this._public = obj;
    }

    get public(){
    	return this._public;
    }

    get config(){
        return this._config;
    }

    set config(config){
        this._config = config;
    }

    afterInit(){

    }

	error(code,msg){
		SimpleError.error.call(this,{code:code,msg:msg});
	}

    checkKeyExists(map, ...keys) {
        for(let key of keys){
            if (!(key in map))
                SimpleError.error.call(this,{code:10002,msg:key + " is undefined"});
        }
    }
}
module.exports = ControllerBase;