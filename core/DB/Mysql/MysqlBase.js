var db = require("../db");

class MysqlBase{
    constructor(config,provider){
        let mysqlSeq=db(config.db.mysql)
        let MysqlTableList =Object.keys(provider.Model.mysql)
        MysqlTableList.forEach(e => {
            mysqlSeq.import(provider.Model.mysql[e]);
        });
        mysqlSeq.sync({ force: false });
    }
}
module.exports = MysqlBase;