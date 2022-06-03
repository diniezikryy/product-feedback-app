const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");
const Feedback = require("../models/feedback");

const api = supertest(app);

const initialFeedbacks = [
  {
    title: "Add a dark theme option",
    category: "feature",
    upvotes: 69,
    status: "suggestion",
    description:
      "It would help people with light sensitivities and who prefer dark mode.",
    /* user: {
      image: "something",
      name: "Elijah Moss",
      username: "hexagon.bestagon",
    }, */
    comments: [],
  },
  {
    title: "Add tags for solutions",
    category: "enhancement",
    upvotes: 112,
    status: "suggestion",
    description: "Easier to search for solutions based on a specific stack.",
    /* user: {
      image: "something",
      name: "Suzanne Chang",
      username: "upbeat1811",
    }, */
    comments: [],
  },
];

beforeEach(async () => {
  await Feedback.deleteMany({});
  let feedbackObject = new Feedback(initialFeedbacks[0]);
  await feedbackObject.save();
  feedbackObject = new Feedback(initialFeedbacks[1]);
  await feedbackObject.save();
});

test("feedbacks are returned as json", async () => {
  await api
    .get("/api/feedbacks")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

test("all feedbacks are returned", async () => {
  const response = await api.get("/api/feedbacks");

  expect(response.body).toHaveLength(initialFeedbacks.length);
});

afterAll(() => {
  mongoose.connection.close();
});
