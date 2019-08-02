const express = require('express');
const bodyParser = require('body-parser');

const tweetRouter = express.Router();

tweetRouter.use(bodyParser.json());

tweetRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all the tweets');
})
.post((req, res, next) => {
    res.end('Will create tweet with autor: ' + req.body.author
    + ' with topic: ' + req.body.topic
    + ' with content: ' + req.body.content
    + ' with date: ' + req.body.date);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT not supported');
})
.delete((req, res, next) => {
    res.end('Deleting all the dishes');
});

tweetRouter.route('/:tweetId')
.get((req, res, next) => {
    res.end('Will send dish: ' + req.params.tweetId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST not supported');
})
.put((req, res, next) => {
    res.write('Updating the tweet: ' + req.params.id + '\n'); // just for show
    res.end('Will update the tweet with author: ' + req.body.author
    + ' with topic: ' + req.body.topic
    + ' with content: ' + req.body.content
    + ' with date: ' + req.body.date);
})
.delete((req, res, next) => {
    res.end('Will delete the tweet' + req.params.id);
});

module.exports = tweetRouter;