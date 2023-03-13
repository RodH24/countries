const sequelize = require('sequelize');
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Activity', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        difficulty: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
}