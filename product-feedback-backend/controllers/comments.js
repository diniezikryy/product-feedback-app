const commentsRouter = require("express").Router();
const { response } = require("express");
const Comment = require("../models/comment");
const Feedback = require("../models/feedback");
const User = require("../models/user");

// retrieves all the comments that exists in the database
commentsRouter.get("/", async (request, response) => {
  const comments = await Comment.find({});
  response.json(comments);
});

// adds the comments made into the database
commentsRouter.post("/", async (request, response, next) => {
  const body = request.body;

  console.log("body: ", body);

  const feedback = await Feedback.findById(body._id);

  // this is written for postman request
  const comment = new Comment({
    feedbackId: body._id,
    content: body.content,
    replies: [],
    user: body.user,
  });

  try {
    const savedComment = await comment.save();
    feedback.comments = feedback.comments.concat(savedComment._id);
    await feedback.save();

    response.json(savedComment);
  } catch (exception) {
    next(exception);
  }
});

module.exports = commentsRouter;
