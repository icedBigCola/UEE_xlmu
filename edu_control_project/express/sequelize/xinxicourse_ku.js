const sequelize = require('./config');
const { Sequelize, DataTypes } = require('sequelize');
//定义模型
var xinxicourse_ku = sequelize.define('xinxicourse_ku',{
    ID:{
            field:'ID',
            type: Sequelize.INTEGER,
            allowNull:false,
            primaryKey: true,
        },
        Magor:{
            field:'Magor',
            type: Sequelize.STRING,
            allowNull:true,
        },
        Grade:{
            field:'Grade',
            type: Sequelize.INTEGER,
            allowNull:true
        },
        num:{
            field:'num',
            type: Sequelize.INTEGER,
            allowNull:true
        },
        Course_undertaker:{
            field:'Course_undertaker',
            type: Sequelize.STRING,
            allowNull:true
        },
        Course_module_category:{
            field:'Course_module_category',
            type: Sequelize.STRING,
            allowNull:true
        },
        Course_category:{
            field:'Course_category',
            type: Sequelize.STRING,
            allowNull:true
        },
        Course_Code:{
            field:'Course_Code',
            type: Sequelize.STRING,
            allowNull:true
        },
        Course_name:{
            field:'Course_name',
            type: Sequelize.STRING,
            allowNull:true
        },
        Credit:{
            field:'Credit',
            type: Sequelize.INTEGER,
            allowNull:true
        },
        Total:{
            field:'Total',
            type: Sequelize.INTEGER,
            allowNull:true
        },
        Theory:{
            field:'Theory',
            type: Sequelize.INTEGER,
            allowNull:true
        },
        Practice:{
            field:'Practice',
            type:Sequelize.INTEGER,
            allowNull:true
        },
        one:{
            field:"one",
            type:Sequelize.INTEGER,
            allowNull:true
        },
        two:{
            field:"two",
            type:Sequelize.INTEGER,
            allowNull:true
        },
        three:{
            field:"three",
            type:Sequelize.INTEGER,
            allowNull:true
        },
        four:{
            field:"four",
            type:Sequelize.INTEGER,
            allowNull:true
        },
        five:{
            field:"five",
            type:Sequelize.INTEGER,
            allowNull:true
        },
        six:{
            field:"six",
            type:Sequelize.INTEGER,
            allowNull:true
        },
        seven:{
            field:"seven",
            type:Sequelize.INTEGER,
            allowNull:true
        },
        eight:{
            field:"eight",
            type:Sequelize.INTEGER,
            allowNull:true
        },
        Assessment_method:{
            field:"Assessment_method",
            type:Sequelize.STRING,
            allowNull:true
        },
        remarks:{
            field:"remarks",
            type:Sequelize.STRING,
            allowNull:true
        }
    },
    {
        tableName: 'xinxicourse_ku',
        timestamps: false,
        freezeTableName: true
    }
);


module.exports = xinxicourse_ku;