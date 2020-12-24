const sequelize = require('./config');
const { Sequelize, DataTypes } = require('sequelize');
//定义模型
var MAP_AIRSTATION_evw = sequelize.define('MAP_AIRSTATION_evw',{
        OBJECTID:{
            field:'OBJECTID',
            type: Sequelize.INTEGER,
            allowNull:false,
            primaryKey: true,
        },
        POINT_CODE:{
            field:'POINT_CODE',
            type: Sequelize.INTEGER,
            allowNull:false,
        },
        POINT_NAME:{
            field:'POINT_NAME',
            type: Sequelize.STRING,
            allowNull:false
        },
        AREA_CODE:{
            field:'AREA_CODE',
            type: Sequelize.INTEGER,
            allowNull:false
        },
        LONGITUDE:{
            field:'LONGITUDE',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        LATITUDE:{
            field:'LATITUDE',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        FUNCTION_TYPE:{
            field:'FUNCTION_TYPE',
            type: Sequelize.INTEGER,
            allowNull:true
        },
        FUNCTION_NAME:{
            field:'FUNCTION_NAME',
            type: Sequelize.STRING,
            allowNull:false
        },
        CITY_CODE:{
            field:'CITY_CODE',
            type: Sequelize.INTEGER,
            allowNull:false
        },
        Shape:{
            field:'Shape',
            type: Sequelize.STRING,
            allowNull:false
        },
        SDE_STATE_ID:{
            field:'SDE_STATE_ID',
            type: Sequelize.INTEGER,
            allowNull:false
        },
    },
    {
        tableName: 'MAP_AIRSTATION_evw',
        timestamps: false,
        freezeTableName: true
    }
);


module.exports = MAP_AIRSTATION_evw;