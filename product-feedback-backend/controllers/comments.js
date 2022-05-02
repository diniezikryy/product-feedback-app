const commentsRouter = require("express").Router();
const { response } = require("express");
const Comment = require("../models/comment");

commentsRouter.get("/", async (request, response) => {
  const comments = await Comment.find({});
  response.json(comments);
});

module.exports = commentsRouter;
