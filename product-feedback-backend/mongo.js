const mongoose = require("mongoose");

const url = `mongodb+srv://fullstack:Singapore123@cluster0.myhe3.mongodb.net/feedbacksTest?retryWrites=true&w=majority`;
const localurl = "mongodb://localhost/feedbackstest";

mongoose
  .connect(localurl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

const feedbackSchema = new mongoose.Schema({
  title: String,
  category: String,
  upvotes: Number,
  status: String,
  description: String,
  comments: [
    {
      content: String,
      user: {
        image: String,
        name: String,
        username: String,
      },
    },
  ],
});

const Feedback = mongoose.model("Feedback", feedbackSchema);

const feedback = new Feedback({
  title: "Add tags for solutions",
  category: "enhancement",
  upvotes: 112,
  status: "suggestion",
  description: "Easier to search for solutions based on a specific stack.",
  comments: [
    {
      content:
        "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
      user: {
        image: "./assets/user-images/image-suzanne.jpg",
        name: "Suzanne Chang",
        username: "upbeat1811",
      },
    },
    {
      content:
        "Please use fun, color-coded labels to easily identify them at a glance",
      user: {
        image: "./assets/user-images/image-thomas.jpg",
        name: "Thomas Hood",
        username: "brawnybrave",
      },
    },
  ],
});

feedback.save().then((result) => {
  console.log("feedback saved!");
  mongoose.connection.close();
});
