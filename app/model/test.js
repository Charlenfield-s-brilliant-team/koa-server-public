const Sequelize = require('sequelize');
const chalk = require('chalk')

var sequelize = new Sequelize('saep_saas', 'root', '111111', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
});
sequelize.authenticate().then(function() {
    console.log(
        chalk.green(`数据库连接成功`)
    )
}).catch(function(err) {
    //数据库连接失败时打印输出
    // console.error(err);
    throw err;
});

// var User = sequelize.define('user', {
//     firstName: {
//       type: Sequelize.STRING,
//       field: 'first_name'
//     },
//     lastName: {
//       type: Sequelize.STRING
//     }
// }, {
//     freezeTableName: true
// });
  
// console.log(User);
// User.sync({force: true}).then(function () {
//     return User.create({
//       firstName: 'John',
//       lastName: 'Hancock'
//     });
// });