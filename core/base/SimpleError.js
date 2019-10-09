class SimpleError{
	static error(data){
		let error={
			code:data.code
		}
		if (data.msg) { error.msg=data.msg }
        throw error;
	}
}
module.exports = SimpleError;