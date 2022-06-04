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

feedbacksRouter.post("/", async (req, res, next) => {
  const body = req.body;
  console.log(req);

  const user = await User.findById(body.userId);

  const feedback = new Feedback({
    title: body.title,
    category: body.category,
    upvotes: 0,
    status: body.status,
    description: body.description,
    user: user._id,
    comments: [],
  });

  try {
    const savedFeedback = await feedback.save();
    user.feedbacks = user.feedbacks.concat(savedFeedback._id);
    await user.save();

    res.json(savedFeedback);
  } catch (exception) {
    next(exception);
  }
});

module.exports = feedbacksRouter;
