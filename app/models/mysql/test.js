module.exports = function(sequelize, DataTypes) {
  return sequelize.define("test", {
      id: {
          type: DataTypes.INTEGER,
          allowNull: false, //非空
          autoIncrement: true, //自动递增
          primaryKey: true //主键
      },
      roleName: {
          type: DataTypes.STRING,
          field: "role_name",
          comment: "角色名称"
      }
  }, {
      underscored: true, //额外字段以下划线来分割
      createdAt: "created_at",
      updatedAt: "updated_at",
      timestamps: false, //取消默认生成的createdAt、updatedAt字段
      freezeTableName: true, // Model 对应的表名将与model名相同
      comment: "测试表"
  });
}