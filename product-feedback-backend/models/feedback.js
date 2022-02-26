import mongoose from "mongoose";
import feedback from "../../product-feedback-frontend/src/services/feedback";
const { Schema } = mongoose;

const feedbackSchema = new Schema({
  id: Number,
  title: String,
  category: String,
  upvotes: Number,
  status: String,
  description: String,
});

const Feedback = mongoose.model("Feedback", feedbackSchema);
