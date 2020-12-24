var Sequelize = require('sequelize');
const db = {
    // database: 'EDB_QHD',
    // username: 'sa',
    // password: 'Data@hebuee',
   
    // host: '10.13.12.155',
    // password: 'aaa123456',
    // host: '192.168.0.108',
    // port: 1433,
    port :3306,

    database: 'mysql',
    username: 'root',
    password: 'root',
   
    host: '49.232.222.39',
    
    dialect: 'mysql',
    // close log
    logging: false,
    // "timestamps: false" fixed Unknown column 'createdAt' in 'field list'
    timestamps: false,
    dialectOptions: {
      multipleStatements: true
    }
  }


var sequelize = new Sequelize(db
)

// var sequelize = new Sequelize(
//   'huanjingdb',
//   'root',
//   'aaa123456',
//   {
//     'dialect':'mysql',
//     'host':'localhost',
//     'port':3306
//   } 
// );

module.exports = sequelize