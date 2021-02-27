const express = require('express');
const bodyParser = require('body-parser');

const promRouter = express.Router();
promRouter.use(bodyParser.json())


promRouter
.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will show all the promotions to you!')
})
.post((req, res, next) => {
    res.end('Will add prom ' + req.body.name + ' with description ' + req.body.description)
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation not supported on /promotions ");
  })
  .delete((req, res, next) => {
    res.end("Will delete all the promotions! ");
  });

  promRouter
  .route("/:promoId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get( (req, res, next) => {
    res.end("Sending details of promotion: " + req.params.promoId);
  })
  .post( (req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation not supported on /promotions/" + req.params.promoId);
  })
  .put((req, res, next) => {
    res.write("Updating the promotions: " + req.params.promoId);
    res.end(
      "Will update the promotions: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .delete(  (req, res, next) => {
    res.end("Deleting promotions: " + req.params.promoId);
  });

module.exports =  promRouter
