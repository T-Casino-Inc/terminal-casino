'use strict';
require('dotenv').config();
const {start} = require('./src/server.js');
const {sequelize} = require('./src/models/index.js');


// sequelize.sync()
//     .then(() => {
//         start(process.env.PORT || 3001);
//     })
//     .catch(console.error);

start(process.env.PORT || 3001);