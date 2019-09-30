const Router = require('koa-router')
const provider = require('../config/provider')
const Http = require('./communication/Http')
const config = require('../config/config')
module.exports = function(){
	var router = new Router({
		prefix: `/${config.identifier}`
	})

	router.post('*', async (ctx, next)=>{
		await Http.main(ctx, next);
	})
	router.get('*', async (ctx, next)=>{
		await Http.main(ctx, next);
	})
	
  	return router
}