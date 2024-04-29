
'use strict';

const express = require('express');
const cors = require('cors');
const awsRoute = require('./routes/aws-gateway.js');
const app = express();

app.use(cors());
app.use(express.json());
//app.use('/aws', awsRoute);

module.exports = {
    server: app,
    start: (port) => {
        app.listen(port, () => {
            console.log(`Server is up on port ${port}`);
        });
    },
};