import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import AddFeedbackForm from "./components/AddFeedback/AddFeedbackForm";
import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Login/RegisterPage";
import FeedbackDetailView from "./components/FeedbackView/FeedbackDetailView";

import feedbackService from "./services/feedback";

import { NotificationProvider } from "./contexts/NotificationContext";
import { UserProvider } from "./contexts/UserContext";

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    feedbackService.getAll().then((initialFeedbacks) => {
      setFeedbacks(initialFeedbacks.sort((a, b) => b.upvotes - a.upvotes));
    });
  }, []);

  return (
    <div>
      <UserProvider>
        <NotificationProvider>
          <Routes>
            <Route
              path="/"
              element={<Homepage key="hello world" feedbacks={feedbacks} />}
              exact
            />
            <Route path="/add-feedback" element={<AddFeedbackForm />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/feedbacks/:id"
              element={<FeedbackDetailView feedbacks={feedbacks} />}
            />
          </Routes>
        </NotificationProvider>
      </UserProvider>
    </div>
  );
};

export default App;
