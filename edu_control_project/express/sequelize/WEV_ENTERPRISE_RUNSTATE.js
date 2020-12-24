const sequelize = require('./config');
const { Sequelize, DataTypes } = require('sequelize');
//定义模型
var WEV_ENTERPRISE_RUNSTATE = sequelize.define('WEV_ENTERPRISE_RUNSTATE',{
        PSCODE:{
            field:'PSCODE',
            type: Sequelize.INTEGER,
            allowNull:false,
            primaryKey: true,
        },
        PSNAME:{
            field:'PSNAME',
            type: Sequelize.STRING,
            allowNull:false,
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
        STATECONTROLLEDTYPENAME:{
            field:'STATECONTROLLEDTYPENAME',
            type: Sequelize.STRING,
            allowNull:false
        },
        DISPOSETYPECODE:{
            field:'DISPOSETYPECODE',
            type: Sequelize.STRING,
            allowNull:false
        },
        SUBJECTIONRELATIONNAME:{
            field:'SUBJECTIONRELATIONNAME',
            type: Sequelize.STRING,
            allowNull:false
        },
        VALLEYNAME:{
            field:'VALLEYNAME',
            type: Sequelize.STRING,
            allowNull:false
        },
        REGIONNAME:{
            field:'REGIONNAME',
            type: Sequelize.STRING,
            allowNull:false
        },
        REGIONNAME:{
            field:'REGIONNAME',
            type: Sequelize.STRING,
            allowNull:false
        },
        PSWEBSITE:{
            field:'PSWEBSITE',
            type: Sequelize.STRING,
            allowNull:false
        },
        MONITORTIME:{
            field:'MONITORTIME',
            type: Sequelize.DATE,
            allowNull:false
        },
    },
    {
        tableName: 'WEV_ENTERPRISE_RUNSTATE',
        timestamps: false,
        freezeTableName: true
    }
);


module.exports = WEV_ENTERPRISE_RUNSTATE;