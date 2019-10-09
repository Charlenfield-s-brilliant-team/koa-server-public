/**
 * router.js
 * 路由配置文件
 * form Charlenfield
 * version:1.0.0
 * updataTime:2019年9月30日
 * updateContent:
    1.post、get请求处理
 */
const Router = require('koa-router')
const provider = require('../config/provider')
const Http = require('./communication/Http')
const config = require('../config/config')
module.exports = function(){
	var router = new Router({
		prefix: `/${config.identifier}`
	})

	router.post('*', async (ctx, next)=>{
		console.log(ctx.request.header.authorization)
		await Http.main(ctx, next);
	})
	router.get('*', async (ctx, next)=>{
		await Http.main(ctx, next);
	})
	
  	return router
}