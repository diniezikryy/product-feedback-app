const feedbacksRouter = require("express").Router();
const { response } = require("express");
const Feedback = require("../models/feedback");
const Comment = require("../models/comment");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

/* Useful functions */

// function to help isolate the token from the authorization header
const getTokenFrom = (request) => {
  const authorization = request.get("authorization");
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

// function to get the data of all the feedbacks, which includes the comments + the creator details
feedbacksRouter.get("/", async (request, response) => {
  const feedbacks = await Feedback.find({})
    .populate({
      path: "comments",
      populate: { path: "user" },
    })
    .populate("user", { username: 1, name: 1 });
  response.json(feedbacks);
});

// function to get the individual data of a feedback
feedbacksRouter.get("/:id", async (request, response) => {
  const feedback = await Feedback.findById(request.params.id)
    .populate({
      path: "comments",
      populate: { path: "user" },
    })
    .populate("user", { username: 1, name: 1 });
  if (feedback) {
    response.json(feedback);
  } else {
    response.status(404).end();
  }
});

// function to add individual feedback to the API only when a user is logged in
feedbacksRouter.post("/", async (req, res, next) => {
  const body = req.body.content;
  const token = getTokenFrom(req);

  // checks the validity of the token and decodes it, if no token is passed, error 'jwt must be provided'
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!decodedToken.id) {
    // will not be returned if token is undefined
    return response.status(401).json({ error: "token missing or invalid" });
  }

  // searches user based on user's identity in the token
  const user = await User.findById(decodedToken.id);

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
