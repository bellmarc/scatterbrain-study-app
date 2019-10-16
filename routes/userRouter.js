const express = require('express');
const userRouter = express.Router();
const User = require('../models/user.js')

userRouter.route('/')
    .get((req, res, next) => {
        User.find((err, users) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(users)
        })
    })
    .post((req, res, next) => {
        const newUser = new User(req.body)
        newUser.save((err, newUser) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newUser)
        })
    })

userRouter.route('/:_id')
    .get((req, res, next) => {
        User.findById
    })

module.exports = userRouter 