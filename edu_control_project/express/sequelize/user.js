const sequelize = require('./config');
const { Sequelize, DataTypes } = require('sequelize');
//定义模型
var user = sequelize.define('login',{
        id:{
            field:'id',
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true, 
            allowNull:false,
        },
        username:{
            field:'username',
            type: Sequelize.STRING,
            allowNull:false
        },
        password:{
            field:'password',
            type: Sequelize.STRING,
            allowNull:false
        },
        authority:{
            field:'authority',
            type: Sequelize.INTEGER,
            allowNull:false
        },
    },
    {
        tableName: 'login',
        timestamps: false,
        freezeTableName: true
    }
);


module.exports = user;