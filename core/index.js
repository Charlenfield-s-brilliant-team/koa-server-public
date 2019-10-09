const ControllerBase = require("./base/ControllerBase");
const SimpleError = require("./base/SimpleError");
module.exports = {
	BASE:{
		ControllerBase:ControllerBase,
	},
	ERROR:{
		SimpleError:SimpleError
	}
};
