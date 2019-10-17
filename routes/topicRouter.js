const express = require('express');
const topicRouter = express.Router();
const Topic = require('../models/topic.js')
const User = require('../models/user.js')

//get all or post
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
        newTopic.save((err, newTopic) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(newTopic)
        })
    })

//get topics for user
topicRouter.route('/:userId')
    .get((req, res, next) => {
        Topic.find({userId: req.params.userId},(err, topics) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(topics)
        })
    })

//pick weighted topic from user. Requires userId in req.body
topicRouter.route('/pick/:userId')
    .get((req, res, next) => {
        Topic.find({userId: req.params.userId},(err, topics) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            const pickedId = weightedPick(topics)
            Topic.findById(pickedId, (err, pickedTopic) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                return res.status(200).send(pickedTopic)
            })
        })
    })

//re-weight user's topics after one is completed.
//requires userId and topicId of topic that was completed in req.body
topicRouter.route('/sessionComplete/:userId')
    .put((req, res, next) => {
        Topic.find({userId: req.params.userId}, (err, topics) => {
            topics.forEach(topic => {
                if (topic.id === req.body.topicId){
                    //reset weight for completed topic
                    topic.currentWeight = topic.priority;
                    Topic.findByIdAndUpdate(topic._id, topic, {new: true}, (err, topic) => {
                        if (err) {
                            res.status(500)
                            return next(err)
                        } 
                    })
                } else {
                    //increase weight for other topics
                    topic.currentWeight += topic.priority
                    Topic.findByIdAndUpdate(topic._id, topic, {new: true}, (err, topic) => {
                        if (err) {
                            res.status(500)
                            return next(err)
                        }
                    })
                }
            })
            res.status(200).send('Re-weighted topics!')
        })
    })

//get/delete/edit one topic for user
topicRouter.route('/:userId/:topicId')
    .get((req, res, next) => {
        Topic.findById(req.params.topicId, (err, topic) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(topic)
        })
    })
    .delete((req, res, next) => {
        Topic.findByIdAndRemove(req.params.topicId, (err, topic) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(topic)
        })
    })
    .put((req, res, next) => {
        Topic.findByIdAndUpdate(req.params.topicId, req.body, {new: true}, (err, topic) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(202).send(topic)
        })
    })

function weightedPick(topics){
    let weightedArray = []
    //add once chance for each unit of weight
    topics.forEach(topic => {
        weightedArray = [...weightedArray, ...Array(topic.currentWeight).fill(topic._id)]
    })
    //random
    return weightedArray[Math.floor(Math.random() * weightedArray.length)]
}

//topicRouter.route(/re-weight)
module.exports = topicRouter