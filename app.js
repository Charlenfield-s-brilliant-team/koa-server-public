/**
 * app.js
 * 核心配置文件
 * form Charlenfield
 * version:1.0.0
 * updataTime:2019年10月9日
 * updateContent:
    1.新增使用koa-bodyparser
 */
require('babel-register')
const Koa = require('koa')
const chalk = require('chalk')
const logger = require('koa-logger')
const session = require('koa-session')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const config = require('./config/config')
const provider = require('./config/provider')
let Mysql=require('./core/DB/Mysql/MysqlBase');
new Mysql(config,provider)

//使用路由转发请求
const router = require('./router/router')()

app.use(bodyParser())
app.use(router.routes())

app.listen(config.port, () => {
    console.log(
      	chalk.green(`服务启动成功,端口:${config.port}`)
    )
});