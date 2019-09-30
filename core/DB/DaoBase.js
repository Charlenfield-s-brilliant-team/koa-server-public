const MysqlBase = require('./Mysql/MysqlBase')
const Sequelize = require('sequelize');
const chalk = require('chalk')

class DaoBase{

	constructor(data){
		let mysqlInfo=data.db.mysql;
		let mysql = new Sequelize(mysqlInfo.dbname, mysqlInfo.username, mysqlInfo.password, mysqlInfo.options);
		mysql.authenticate().then(function() {
			console.log(
				chalk.green(`MySQL数据库连接成功`)
			)
		}).catch(function(err) {
			//数据库连接失败时打印输出
			// console.error(err);
			throw err;
		});
		this.models={};
		this.models.mysql=mysql;
	}
	init(){
		return true;
	}
}

module.exports = DaoBase;