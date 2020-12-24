const sequelize = require('./config');
const { Sequelize, DataTypes } = require('sequelize');
//定义模型
var WEV_WATERQUALITYHOUR_NATIONAL_DAY = sequelize.define('WEV_WATERQUALITYHOUR_NATIONAL_DAY',{
        POINTCODE:{
            field:'POINTCODE',
            type: Sequelize.STRING,
            allowNull:false,
            primaryKey: true,
        },
        POINTNAME:{
            field:'POINTNAME',
            type: Sequelize.STRING,
            allowNull:false,
        },
        MONITORDAY:{
            field:'MONITORDAY',
            type: Sequelize.DATE,
            allowNull:false
        },
        MAXWATERQUALITYVALUE:{
            field:'MAXWATERQUALITYVALUE',
            type: Sequelize.INTEGER,
            allowNull:false
        },
        MAXISOVER:{
            field:'MAXISOVER',
            type: Sequelize.INTEGER,
            allowNull:false
        },
        PH:{
            field:'PH',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        DO:{
            field:'DO',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        N_TOTAL:{
            field:'N_TOTAL',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        CODMN:{
            field:'CODMN',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        NH4N:{
            field:'NH4N',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        P_TOTAL:{
            field:'P_TOTAL',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        WATERQUALITYVALUE:{
            field:'WATERQUALITYVALUE',
            type: Sequelize.INTEGER,
            allowNull:false
        },
        WATERQUALITYCHAR:{
            field:'WATERQUALITYCHAR',
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
        KEYPOLLUTANT:{
            field:'KEYPOLLUTANT',
            type: Sequelize.STRING,
            allowNull:false
        },
    },
    {
        tableName: 'WEV_WATERQUALITYHOUR_NATIONAL_DAY',
        timestamps: false,
        freezeTableName: true
    }
);


module.exports = WEV_WATERQUALITYHOUR_NATIONAL_DAY;