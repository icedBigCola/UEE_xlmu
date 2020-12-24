const sequelize = require('./config');
const { Sequelize, DataTypes } = require('sequelize');
//定义模型
var AIRSTATIONDYNAMIC = sequelize.define('AIRSTATIONDYNAMIC',{
        ID:{
            field:'ID',
            type: Sequelize.STRING,
            allowNull:true,
            primaryKey: true,
        },
        AIRSTATIONCODE:{
            field:'AIRSTATIONCODE',
            type: Sequelize.INTEGER,
            allowNull:true,
        },
        AIRSTATIONNAME:{
            field:'AIRSTATIONNAME',
            type: Sequelize.STRING,
            allowNull:true
        },
        MONITORTIME:{
            field:'MONITORTIME',
            type: Sequelize.DATE,
            allowNull:true
        },
        STANDARDTIME:{
            field:'STANDARDTIME',
            type: Sequelize.DATE,
            allowNull:true
        },
        AQI:{
            field:'AQI',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        PM10:{
            field:'PM10',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        PM25:{
            field:'PM25',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        O3:{
            field:'O3',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        NO2:{
            field:'NO2',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        CO:{
            field:'CO',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        SO2:{
            field:'SO2',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        LEVEL:{
            field:'LEVEL',
            type: Sequelize.STRING,
            allowNull:true
        },
        MAINPOLLUTANT:{
            field:'MAINPOLLUTANT',
            type: Sequelize.STRING,
            allowNull:true
        },
    },
    {
        tableName: 'AED_AIRSTATIONDYNAMIC',
        timestamps: false,
        freezeTableName: true
    }
);


module.exports = AIRSTATIONDYNAMIC;