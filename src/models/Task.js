const {DataTypes} = require('sequelize');
const conn = require('../database/conn');
const User = require('./User');

const Task = conn.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    descricao:{
        type: DataTypes.CHAR(100),
        allowNull: false,
        required: true
    },
    completed:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        required: true,
        defaultValue: false
    }
});

User.hasOne(Task);
Task.belongsTo(User);

module.exports = Task;