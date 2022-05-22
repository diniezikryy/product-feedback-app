const feedbacksRouter = require("express").Router();
const { response } = require("express");
const Feedback = require("../models/feedback");
const Comment = require("../models/comment");
const User = require("../models/user");

feedbacksRouter.get("/", async (request, response) => {
  const feedbacks = await Feedback.find({}).populate({
    path: "comments",
    populate: { path: "user" },
  });
  response.json(feedbacks);
});

feedbacksRouter.get("/:id", async (request, response) => {
  const feedback = await Feedback.findById(request.params.id);
  if (feedback) {
    response.json(feedback);
  } else {
    response.status(404).end();
  }
});

// Adding a single feedback to the database w/o user
feedbacksRouter.post("/", async (req, res, next) => {
  const body = req.body;
  console.log(req);

  const feedback = new Feedback({
    title: body.content.title,
    category: body.content.category,
    upvotes: 0,
    status: body.content.status,
    description: body.content.description,
    comments: [],
  });

  try {
    const savedFeedback = await feedback.save();
    res.status(201);
    res.json(savedFeedback);
  } catch (exception) {
    next(exception);
  }
});

module.exports = feedbacksRouter;
