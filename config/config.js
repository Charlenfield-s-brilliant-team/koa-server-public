module.exports = {
    db:{
        mysql:{
            dbname:'koa_server',
            username:'root',
            password:"111111",
            tablePrefix:"app",
            options:{
                host:"127.0.0.1",
                dialect: 'mysql',
                pool: {
                    max: 5,
                    min: 0,
                    idle: 10000
                },
                dialectOptions: {
                    charset: 'utf8mb4'
                },
                define: {
                    charset: 'utf8mb4',
                    collate: 'utf8mb4_unicode_ci'
                },
                timezone:"+08:00"
            }
        },
	},
    port:9010,
    identifier:'api'
};