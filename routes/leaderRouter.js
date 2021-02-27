const express = require("express");
const bodyParser = require("body-parser");

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter
  .route("/")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })

  .get((req, res, next) => {
    res.end("Will show all the leaders to you");
  })
  .post((req, res, next) => {
    res.end(
      "Will add the leader: " +
        req.body.name +
        " with details: " +
        req.body.description
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation not supported on /leaders ");
  })
  .delete((req, res, next) => {
    res.end("Will delete all the leaders! ");
  });

  leaderRouter
  .route("/:leaderId")
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
  })
  .get( (req, res, next) => {
    res.end("Sending info of leader with id: " + req.params.leaderId);
  })
  .post( (req, res, next) => {
    res.statusCode = 403;
    res.end("Put operation not supported on /leaders/" + req.params.leaderId);
  })
  .put((req, res, next) => {
    res.write("Updating the leader info with id : " + req.params.leaderId);
    res.end(
      "Will update the leader: " +
        req.body.name 
    );
  })
  .delete(  (req, res, next) => {
    res.end("Deleting leader with id: " + req.params.leaderId);
  });

module.exports = leaderRouter
