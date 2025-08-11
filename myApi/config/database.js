const Sequelize = require('sequelize');

const sequelize = new Sequelize( {
    host: 'localhost',
    dialect: 'mysql',
    username: 'root',
    password: 'Anthony2918@$',
    database: 'store'
});

module.exports = sequelize;