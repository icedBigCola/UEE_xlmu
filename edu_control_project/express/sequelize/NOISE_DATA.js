const sequelize = require('./config');
const { Sequelize, DataTypes } = require('sequelize');
//定义模型
var NOISE_DATA = sequelize.define('NOISE_DATA',{
        OBJECTID:{
            field:'OBJECTID',
            type: Sequelize.INTEGER,
            allowNull:false,
            primaryKey: true,
        },
        POINT_CODE:{
            field:'POINT_CODE',
            type: Sequelize.STRING,
            allowNull:true,
        },
        POINTNAME:{
            field:'POINTNAME',
            type: Sequelize.STRING,
            allowNull:true
        },
        AREA_CODE:{
            field:'AREA_CODE',
            type: Sequelize.INTEGER,
            allowNull:true
        },
        LONGITUDE:{
            field:'LONGITUDE',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        LATITUDE:{
            field:'LATITUDE',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        CITY_CODE:{
            field:'CITY_CODE',
            type: Sequelize.INTEGER,
            allowNull:true
        },
        NOISE_SOURCE:{
            field:'NOISE_SOURCE',
            type: Sequelize.STRING,
            allowNull:true
        },
        UPPER_LIMIT:{
            field:'UPPER_LIMIT',
            type: Sequelize.INTEGER,
            allowNull:true
        },
        LOWER_LIMIT:{
            field:'LOWER_LIMIT',
            type: Sequelize.INTEGER,
            allowNull:true
        },
        BEGIN_TIME:{
            field:'LOWER_LIMIT',
            type: Sequelize.INTEGER,
            allowNull:true
        },
        END_TIME:{
            field:'END_TIME',
            type: Sequelize.INTEGER,
            allowNull:true
        },
        SOURCE_NAME:{
            field:'SOURCE_NAME',
            type: Sequelize.STRING,
            allowNull:true
        },
        ID:{
            field:'ID',
            type: Sequelize.STRING,
            allowNull:true
        },
        POINTCODE:{
            field:'POINTCODE',
            type: Sequelize.STRING,
            allowNull:true
        },
        LEQ:{
            field:'LEQ',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        LMAX:{
            field:'LMAX',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        LMIN:{
            field:'LMIN',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        L10:{
            field:'L10',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        L50:{
            field:'L50',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        L90:{
            field:'L90',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        SD:{
            field:'SD',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        SAMPLING_RATE:{
            field:'SAMPLING_RATE',
            type: Sequelize.FLOAT,
            allowNull:true
        },
        ISOVER:{
            field:'ISOVER',
            type: Sequelize.STRING,
            allowNull:true
        },
        RECTIME:{
            field:'RECTIME',
            type: Sequelize.STRING,
            allowNull:true
        },
    },
    {
        tableName: 'NOISE_DATA',
        timestamps: false,
        freezeTableName: true
    }
);


module.exports = NOISE_DATA;