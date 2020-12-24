const sequelize = require('./config');
const { Sequelize, DataTypes } = require('sequelize');
//定义模型
var map_town = sequelize.define('map_town',{
        id:{
            field:'id',
            type: Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true, 
            allowNull:false,
        },
        shape:{
            field:'shape',
            type: Sequelize.STRING,
            allowNull:false
        },
        town_name:{
            field:'town_name',
            type: Sequelize.STRING,
            allowNull:false
        },
        town_code:{
            field:'town_code',
            type: Sequelize.STRING,
            allowNull:false
        }
    },
    {
        tableName: 'map_town',
        timestamps: false,
        freezeTableName: true
    }
);


module.exports = map_town;