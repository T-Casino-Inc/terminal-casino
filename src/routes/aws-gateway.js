
'use strict';

const express = require('express');
const userModel = require('../models/users/users.js');
const router = express.Router();

router.post('/new-user', async (req, res) => {
    try {
        let newUser = await userModel.create({
            email: req.body.email,
            passwordToken: req.body.passwordToken,
        });
        res.status(200).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/users', async (req, res) => {
    try {
        let users = await userModel.findAll();
        res.status(200).send(users);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;