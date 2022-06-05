import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import AddFeedbackForm from "./components/AddFeedback/AddFeedbackForm";
import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Login/RegisterPage";

import { NotificationProvider } from "./contexts/NotificationContext";
import { UserProvider } from "./contexts/UserContext";
import { FeedbackProvider } from "./contexts/FeedbackContext";

const App = () => {
  return (
    <div>
      <FeedbackProvider>
        <UserProvider>
          <NotificationProvider>
            <Routes>
              <Route path="/" element={<Homepage />} exact />
              <Route path="/add-feedback" element={<AddFeedbackForm />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </NotificationProvider>
        </UserProvider>
      </FeedbackProvider>
    </div>
  );
};

export default App;
