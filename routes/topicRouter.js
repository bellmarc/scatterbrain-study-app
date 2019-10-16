const express = require('express');
const topicRouter = express.Router();
const Topic = require('../models/topic.js')
const User = require('../models/user.js')

//dev user to connect to topics
const devUser = new User(
    {name: 'dev user'}
)

topicRouter.route('/')
    .get((req, res, next) => {
        Topic.find((err, topics) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(topics)
        })
    })
    .post((req, res, next) => {
        const newTopic = new Topic(req.body)
        newTopic.userId = devUser._id
        newTopic.save((err, newTopic) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newTopic)
        })
    })
    
topicRouter.route('/:_id')
    .get((req, res, next) => {
        Topic.findById(req.params._id, (err, topic) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(topic)
        })
    })
    .delete((req, res, next) => {
        Topic.findByIdAndRemove(req.params._id, (err, topic) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(topic)
        })
    })
    .put((req, res, next) => {
        Topic.findByIdAndUpdate(req.params._id, req.body, {new: true}, (err, topic) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(202).send(topic)
        })
    })

//topicRouter.route('/pick')

//topicRouter.route(/re-weight)
module.exports = topicRouter