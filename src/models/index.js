
'use strict';

require('dotenv').config();
const {Sequelize, DataTypes} = require('sequelize');
const userModel = require('./users/users.js');
const database_url = process.env.DATABASE_URL;

const aws_db = new Sequelize(database_url);
const users = userModel(aws_db, DataTypes);

module.exports = {
    sequelize: aws_db,
    users: users,
};
