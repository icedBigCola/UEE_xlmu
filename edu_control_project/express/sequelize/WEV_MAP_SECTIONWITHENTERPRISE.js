const sequelize = require('./config');
const { Sequelize, DataTypes } = require('sequelize');
//定义模型
var WEV_MAP_SECTIONWITHENTERPRISE = sequelize.define('WEV_MAP_SECTIONWITHENTERPRISE',{
        OBJNAME:{
            field:'OBJNAME',
            type: Sequelize.STRING,
            allowNull:false,
            primaryKey: true,
        },
        TYPECODE:{
            field:'TYPECODE',
            type: Sequelize.INTEGER,
            allowNull:false,
        },
        TYPENAME:{
            field:'TYPENAME',
            type: Sequelize.STRING,
            allowNull:false
        },
        INRIVER:{
            field:'INRIVER',
            type: Sequelize.STRING,
            allowNull:false
        },
    },
    {
        tableName: 'WEV_MAP_SECTIONWITHENTERPRISE',
        timestamps: false,
        freezeTableName: true
    }
);


module.exports = WEV_MAP_SECTIONWITHENTERPRISE;