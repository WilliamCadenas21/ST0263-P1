const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Tweets = require('../models/tweets');

const tweetRouter = express.Router();

tweetRouter.use(bodyParser.json());

tweetRouter.route('/')
.get((req, res, next) => {
    Tweets.find({})
        .then((tweets) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(tweets);
        }, (err) => next(err)) // Handle error
        .catch((err) => next(err));
})
.post((req, res, next) => {
    Tweets.create(req.body)
        .then((tweet) => {
            console.log('Tweet created ', tweet);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(tweet);
        }, (err) => next(err)) // Handle error
        .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT not supported');
})
.delete((req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported')
});

tweetRouter.route('/:tweetId')
.get((req, res, next) => {
    Tweets.findById(req.params.tweetId)
        .then((tweet) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(tweet);
        }, (err) => next(err)) // Handle error
        .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST not supported');
})
.put((req, res, next) => {
    Tweets.findByIdAndUpdate(req.params.tweetId, {
        $set: req.body
    }, { new: true })
        .then((tweet) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(tweet);
        }, (err) => next(err)) // Handle error
        .catch((err) => next(err));
})
.delete((req, res, next) => {
    Tweets.findByIdAndRemove(req.params.tweetId)
        .then((resp) => {
            req.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(resp);
        }, (err) => next(err)) // Handle error
        .catch((err) => next(err));
});

module.exports = tweetRouter;