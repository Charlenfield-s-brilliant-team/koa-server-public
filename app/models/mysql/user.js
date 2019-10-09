module.exports = function(sequelize, DataTypes) {
    return sequelize.define("user", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //非空
            autoIncrement: true, //自动递增
            primaryKey: true //主键
        },
        account: {
            type: DataTypes.STRING,
            field: "account",
            comment: "账号"
        },
        password: {
            type: DataTypes.STRING,
            field: "user_name",
            comment: "密码"
        },
        accountType: {
            type: DataTypes.STRING,
            field: "account_type",
            comment: "账号类型"
        },
        nickname: {
            type: DataTypes.STRING,
            field: "user_name",
            comment: "用户名称"
        },
        head: {
            type: DataTypes.STRING,
            field: "head",
            comment: "头像"
        },
        mobile: {
            type: DataTypes.STRING,
            field: "mobile",
            comment: "手机号"
        },
        loginTime: {
            type: DataTypes.STRING,
            field: "login_time",
            comment: "登录时间"
        },
        info: {
            type: DataTypes.JSON,
            field: "info",
            comment: "备注信息"
        }
    }, {
        underscored: true, //额外字段以下划线来分割
        createdAt: "create_time",
        updatedAt: "update_time",
        timestamps: true, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
        comment: "角色表"
    });
}