const {Sequelize} = require('sequelize');
const conn = new Sequelize({
    database: "tasks",
    username: "root",
    password: "1234",
    host: 'localhost',
    port: "3306",
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = conn;

