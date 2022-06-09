import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import AddFeedbackForm from "./components/AddFeedback/AddFeedbackForm";
import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Login/RegisterPage";

import { NotificationProvider } from "./contexts/NotificationContext";
import { UserProvider } from "./contexts/UserContext";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const App = () => {
  return (
    <div>
      <UserProvider>
        <NotificationProvider>
          <Routes>
            <Route path="/" element={<Homepage key="hello world" />} exact />
            <Route path="/add-feedback" element={<AddFeedbackForm />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </NotificationProvider>
      </UserProvider>
    </div>
  );
};

export default App;
