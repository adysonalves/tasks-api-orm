const {DataTypes} = require('sequelize');
const conn = require('../database/conn');

const User = conn.define('user', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false,
        required: true,
        unique: true
    },
    passwd:{
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    ativo:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
});

module.exports = User;