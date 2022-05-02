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

feedbacksRouter.post("/", async (request, response) => {
  const content = request.body.content;
  const feedback = new Feedback({
    title: content.title,
    category: content.category,
    upvotes: 0,
    status: "suggestion",
    description: content.description,
  });
  const savedFeedback = await feedback.save();
  response.json(savedFeedback.toJSON());
});

module.exports = feedbacksRouter;
