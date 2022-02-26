const feedbacksRouter = require("express").Router();
const { response } = require("express");
const Feedback = require("../models/feedback");

feedbacksRouter.get("/", async (request, response) => {
  const feedbacks = await Feedback.find({});
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

module.exports = feedbacksRouter;
