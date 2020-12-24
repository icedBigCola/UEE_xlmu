const sequelize = require('./config');
const { Sequelize, DataTypes } = require('sequelize');
//定义模型
var WATERQUALITY_BATH = sequelize.define('WATERQUALITY_BATH',{
        PKID:{
            field:'PKID',
            type: Sequelize.INTEGER,
            primaryKey:true,
            // autoIncrement:true, 
            allowNull:false,
        },
        POINTNAME:{
            field:'POINTNAME',
            type: Sequelize.STRING,
            allowNull:false
        },
        MONITORTIME:{
            field:'MONITORTIME',
            type: Sequelize.DATE,
            allowNull:false
        },
        WQ:{
            field:'WQ',
            type: Sequelize.STRING,
            allowNull:false
        },
        WATERQUALITYTARGET:{
            field:'WATERQUALITYTARGET',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        WQLTGVCHAR:{
            field:'WQLTGVCHAR',
            type:Sequelize.STRING,
            allowNull:false
        },
    },
    {
        tableName: 'WATERQUALITY_BATH',
        timestamps: false,
        freezeTableName: true
    }

);


module.exports = WATERQUALITY_BATH;