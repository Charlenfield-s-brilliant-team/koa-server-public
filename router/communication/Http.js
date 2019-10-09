const base = require('./base');
const provider = require('../../config/provider')

class Http extends base{
    
    async main(ctx,next){
        let controllerList=provider.controllerList;
        let url=ctx.url;
        let controller=url.split('/')[2];
        let action=url.split('/')[3].split('?')[0];
        if (!controller) {
            ctx.status = 200;
            ctx.body = {
                code:10000,
                msg:'error url'
            };
            return next;
        }
        let controllerKeyList=Object.keys(controllerList);
        if (!(controllerKeyList.indexOf(controller) >= 0) || !new controllerList[controller].controllerFn()[action]) {
            ctx.status = 200;
            ctx.body = {
                code:10000,
                msg:'error url'
            };
            return next;
        }
        try {
            let GETBody=ctx.request.query?ctx.request.query:{};
            let POSTBody=ctx.request.body?ctx.request.body:{};
            let requestBody=Object.assign(GETBody,POSTBody);
            let controllerFn= new controllerList[controller].controllerFn();
            let res= await controllerFn[action](requestBody);
            ctx.status = 200;
            if (res.sourceData === true) {
                ctx.body=res;
            }else{
                ctx.body = {
                    code:0,
                    data:res
                };
            }
            await next()
        } catch (error) {
            console.log('error',error)
            if (error.code) {
                ctx.status = 200;
                ctx.body = {
                    code:error.code,
                    msg:error.msg
                };
            }else{
                ctx.status = 200;
                ctx.body = {
                    code:10000,
                    msg:error
                };
            }
            return next;
        }
    }
}

module.exports = new Http();