const express = require('express');
const topicRouter = express.Router();
const Topic = require('../models/topic.js')
const User = require('../models/user.js')

//dev users to connect to topics (these are dan's, you should make your own if you need to test)
// [
//     {
//         "_id": "5da74084f1f54a4e0898b98f",
//         "name": "George",
//     },
//     {
//         "_id": "5da7408bf1f54a4e0898b990",
//         "name": "Bobby",
//     },
//     {
//         "_id": "5da74092f1f54a4e0898b991",
//         "name": "Elizabeth",
//     }
// ]

//get all for dev
topicRouter.get('/dev', (req, res, next) => {
    Topic.find((err, topics) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(topics)
    })
})

topicRouter.route('/')
    .get((req, res, next) => {
        Topic.find({userId: req.body.userId},(err, topics) => {
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

topicRouter.route('/pick')
    .get((req, res, next) => {
        Topic.find({userId: req.body.userId},(err, topics) => {
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

function weightedPick(topics){
    const weightedArray = []
    //add once chance for each unit of weight
    topics.forEach(topic => {
        weightedArray.push(Array(topic.currentWeight).fill(topic._id))
    })
    //random
    return weightedArray[Math.floor(Math.random() * weightedArray.length)]
}

//topicRouter.route(/re-weight)
module.exports = topicRouter