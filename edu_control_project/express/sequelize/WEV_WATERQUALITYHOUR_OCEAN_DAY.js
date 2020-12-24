const sequelize = require('./config');
const { Sequelize, DataTypes } = require('sequelize');
//定义模型
var WEV_WATERQUALITYHOUR_OCEAN_DAY = sequelize.define('WEV_WATERQUALITYHOUR_OCEAN_DAY',{
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
        CODMN:{
            field:'CODMN',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        CODCR:{
            field:'CODCR',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        BOD5:{
            field:'BOD5',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        NH4N:{
            field:'NH4N',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        BOD5:{
            field:'BOD5',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        P_TOTAL:{
            field:'P_TOTAL',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        N_TOTAL:{
            field:'N_TOTAL',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        CU:{
            field:'CU',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        ZN:{
            field:'ZN',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        F:{
            field:'F',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        SE:{
            field:'SE',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        OAS:{
            field:'OAS',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        HG:{
            field:'HG',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        CD:{
            field:'CD',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        CR6:{
            field:'CR6',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        PB:{
            field:'PB',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        CN_TOTAL:{
            field:'CN_TOTAL',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        V_PHEN:{
            field:'V_PHEN',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        OILS:{
            field:'OILS',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        AN_SAA:{
            field:'AN_SAA',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        S:{
            field:'S',
            type: Sequelize.FLOAT,
            allowNull:false
        },
        COLO_ORG:{
            field:'COLO_ORG',
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
        tableName: 'WEV_WATERQUALITYHOUR_OCEAN_DAY',
        timestamps: false,
        freezeTableName: true
    }
);


module.exports = WEV_WATERQUALITYHOUR_OCEAN_DAY;