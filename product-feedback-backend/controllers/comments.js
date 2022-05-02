const commentsRouter = require("express").Router();
const { response } = require("express");
const Comment = require("../models/comment");
const User = require("../models/user");

commentsRouter.get("/", async (request, response) => {
  const comments = await Comment.find({}).populate("user");
  response.json(comments);
});

module.exports = commentsRouter;
