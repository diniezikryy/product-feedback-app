const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

let feedbacks = [
  {
    id: 1,
    title: "Add tags for solutions",
    category: "enhancement",
    upvotes: 112,
    status: "suggestion",
    description: "Easier to search for solutions based on a specific stack.",
    // comments will be added later
  },
  {
    id: 2,
    title: "Add a dark theme option",
    category: "feature",
    upvotes: 99,
    status: "suggestion",
    description:
      "It would help people with light sensitivities and who prefer dark mode.",
  },
];

// Middleware

const requestLogger = (request, response, next) => {
  console.log("Method:", request.method);
  console.log("Path:  ", request.path);
  console.log("Body:  ", request.body);
  console.log("---");
  next();
};

app.use(requestLogger);

app.get("/", (request, response) => {
  response.send("<h1>Hello Product Feedback App!</h1>");
});

app.get("/api/feedbacks", (request, response) => {
  response.json(feedbacks);
});

app.get("/api/feedbacks/:id", (request, response) => {
  const id = Number(request.params.id);
  const feedback = feedbacks.find((feedback) => feedback.id === id);

  if (feedback) {
    response.json(feedback);
  } else {
    response.status(404).end();
  }
});

// Delete feature for the products no need to do yet

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
