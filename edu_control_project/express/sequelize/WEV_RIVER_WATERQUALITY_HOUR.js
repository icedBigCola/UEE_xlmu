const sequelize = require('./config');
const { Sequelize, DataTypes } = require('sequelize');
//定义模型
var WEV_RIVER_WATERQUALITY_HOUR = sequelize.define('WEV_RIVER_WATERQUALITY_HOUR',{
        RIVERCODE:{
            field:'RIVERCODE',
            type: Sequelize.STRING,
            allowNull:false,
            primaryKey: true,
        },
        RIVERNAME:{
            field:'RIVERNAME',
            type: Sequelize.STRING,
            allowNull:false,
        },
        ISMAINRIVER:{
            field:'ISMAINRIVER',
            type: Sequelize.INTEGER,
            allowNull:false
        },
        ORDERNO:{
            field:'ORDERNO',
            type: Sequelize.INTEGER,
            allowNull:false
        },
        MONITORTIME:{
            field:'MONITORTIME',
            type: Sequelize.DATE,
            allowNull:false
        },
        MINWATERQUALITYVALUE:{
            field:'MINWATERQUALITYVALUE',
            type: Sequelize.INTEGER,
            allowNull:false
        },
        MAXWATERQUALITYVALUE:{
            field:'MAXWATERQUALITYVALUE',
            type: Sequelize.INTEGER,
            allowNull:false
        },
        MINWATERQUALITYCHAR:{
            field:'MINWATERQUALITYCHAR',
            type: Sequelize.STRING,
            allowNull:false
        },
        MAXWATERQUALITYCHAR:{
            field:'MAXWATERQUALITYCHAR',
            type: Sequelize.STRING,
            allowNull:false
        },
        WATERQUALITYTARGET:{
            field:'WATERQUALITYTARGET',
            type: Sequelize.INTEGER,
            allowNull:false
        },
        WATERQUALITYTARGETCHAR:{
            field:'WATERQUALITYTARGETCHAR',
            type: Sequelize.STRING,
            allowNull:false
        },
    },
    {
        tableName: 'WEV_RIVER_WATERQUALITY_HOUR',
        timestamps: false,
        freezeTableName: true
    }
);


module.exports = WEV_RIVER_WATERQUALITY_HOUR;