
var sequelize = require('../config/db.js');
var Sequelize = require('sequelize');

//定义表的模型
var User = sequelize.define('business', {
  id:{ //自增长id,主键,整形
    type:Sequelize.INTEGER,
    primaryKey: true
  },
  userName: { //用户名
    type: Sequelize.STRING
  },
  userPw: { //密码
    type: Sequelize.STRING
  },
  userEmail: { //邮箱
    type: Sequelize.STRING
  },
  userEmail: { //邮箱
    type: Sequelize.STRING
  }
},{charset:'utf8'});

User.sync(); //创建表
module.exports = User;