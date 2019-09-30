const Sequelize = require('sequelize');
const chalk = require('chalk')

function mysqlSeq(data){
	var mysqlSeq = new Sequelize(data.dbname, data.username, data.password, data.options);
	mysqlSeq.authenticate().then(function() {
		console.log(
			chalk.green(`数据库连接成功`)
		)
	}).catch(function(err) {
		//数据库连接失败时打印输出
		throw err;
	});
	return mysqlSeq;
}
module.exports = mysqlSeq;