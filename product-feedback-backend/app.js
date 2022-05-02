const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const feedbacksRouter = require("./controllers/feedbacks");
const commentsRouter = require("./controllers/comments");
const usersRouter = require("./controllers/users");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");
const mongoose = require("mongoose");

logger.info("Connecting to MongoDB server...");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("Connected to MongoDB");
  })
  .catch((error) => {
    logger.error("Error connecting to MongoDB: ", error.message);
  });

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

app.use("/api/feedbacks", feedbacksRouter);
app.use("/api/comments", commentsRouter);
app.use("/api/users", usersRouter);

//app.use(middleware.unknownEndpoint);

module.exports = app;
