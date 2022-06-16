const commentsRouter = require("express").Router();
const { response } = require("express");
const Comment = require("../models/comment");
const Feedback = require("../models/feedback");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

// retrieves all the comments that exists in the database
commentsRouter.get("/", async (request, response) => {
  const comments = await Comment.find({}).populate("user", {
    username: 1,
    name: 1,
  });
  response.json(comments);
});

// adds the comments made into the database
commentsRouter.post("/", async (request, response, next) => {
  const body = request.body.content;
  const token = getTokenFrom(request);

  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }

  const user = await User.findById(decodedToken.id);

  const feedback = await Feedback.findById(body._Id);

  // this is written for postman request
  const comment = new Comment({
    feedbackId: body._Id,
    content: body.content,
    replies: [],
    user: user._id,
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
