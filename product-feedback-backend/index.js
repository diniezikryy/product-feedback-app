const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

let productFeedback = [
  {
    id: 1,
    title: "Add tags for solutions",
    category: "enhancement",
    upvotes: 112,
    status: "suggestion",
    description: "Easier to search for solutions based on a specific stack.",
    comments: [
      {
        id: 1,
        content:
          "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
        user: {
          image: "./assets/user-images/image-suzanne.jpg",
          name: "Suzanne Chang",
          username: "upbeat1811",
        },
      },
      {
        id: 2,
        content:
          "Please use fun, color-coded labels to easily identify them at a glance",
        user: {
          image: "./assets/user-images/image-thomas.jpg",
          name: "Thomas Hood",
          username: "brawnybrave",
        },
      },
    ],
  },
];

app.get("/", (request, response) => {
  response.send("<h1>Hello Product!</h1>");
});

app.get("/api/productfeedbacks", (request, response) => {
  response.json(productFeedback);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
