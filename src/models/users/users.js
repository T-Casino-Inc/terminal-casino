
'use strict';

const { type } = require("os");

const userModel = (Sequelize, DataTypes) => {
    const Users = Sequelize.define('Users', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        passwordToken: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        bitBalance: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        bitLossToday: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        mathProblemsAttempted: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
        mathProblemsSolved: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
    });

    return Users;
}

module.exports = userModel;