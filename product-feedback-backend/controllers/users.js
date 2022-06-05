const usersRouter = require("express").Router();
const bcrypt = require("bcrypt");
const { response } = require("express");
const User = require("../models/user");

// gets the details of the users
usersRouter.get("/", async (request, response) => {
  const users = await User.find({}).populate("feedbacks");
  response.json(users);
});

// adds a new user into the databaseee
usersRouter.post("/", async (request, response) => {
  const { username, name, password } = request.body;

  // checks if there is an existing user w/ the same username and rejects it
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return response.status(400).json({
      error: "username must be unique",
    });
  }

  // else, a new user gets added
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    image: "test",
    username,
    name,
    passwordHash,
  });

  const savedUser = await user.save();

  response.status(201).json(savedUser);
});

module.exports = usersRouter;
