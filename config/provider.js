const controller_user = require('../app/controller/user');
const path=require('path');

module.exports = {
    controllerList:{
        user:{
            name:'user',
            controllerFn:controller_user
        }
    },
    Model:{
        mysql:{
            test:path.join(__dirname,'../app/models/mysql/test'),
            user:path.join(__dirname,'../app/models/mysql/user')
        }
    }
};