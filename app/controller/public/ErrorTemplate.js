/**
 * ErrorTemplate
 * 错误代码配置文件
 * form Charlenfield
 * 规则:
 *    1开头错误代码表示代码无法执行的错误
 *
 */
const errorConfig={
	//通用错误代码
	'sqlerror':[10001,'sql操作失败','sql error'],
	'paramsNull':[10002,'必传参数不存在','params Null'],
	'tokenExpired':[30001,'用户验证信息过期','token expired'],

};

class ErrorTemplate{
	static error(data){
        let mb= errorConfig[data];
        throw{ 
			code:mb[0],
			msg:mb[1] 
		}
	}
}
module.exports = ErrorTemplate;