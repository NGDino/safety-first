const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
//use JAWSDB first, if not, use local host
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize('information_station_db', process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

module.exports = sequelize;

//