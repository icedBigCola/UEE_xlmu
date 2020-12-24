const sequelize = require('./config');
const { Sequelize, DataTypes } = require('sequelize');
//定义模型
var WEV_DIC_WATERQUALITYSTANDARDVALUE = sequelize.define('WEV_DIC_WATERQUALITYSTANDARDVALUE',{
        STANDARDLEVELNUMBER:{
            field:'STANDARDLEVELNUMBER',
            type: Sequelize.INTEGER,
            allowNull:false,
            primaryKey: true,
        },
        STANDARDLEVELCHAR:{
            field:'STANDARDLEVELCHAR',
            type: Sequelize.STRING,
            allowNull:false,
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
    },
    {
        tableName: 'WEV_DIC_WATERQUALITYSTANDARDVALUE',
        timestamps: false,
        freezeTableName: true
    }
);


module.exports = WEV_DIC_WATERQUALITYSTANDARDVALUE;