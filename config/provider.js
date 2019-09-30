const controller_user = require('../app/controller/user');
const path=require('path');
const test=path.join(__dirname,'../app/models/test');

module.exports = {
    controllerList:{
        user:{
            name:'user',
            controllerFn:controller_user
        }
    },
    Model:{
        mysql:{
            test:test
        }
    }
};