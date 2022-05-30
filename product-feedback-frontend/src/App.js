import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import AddFeedbackForm from "./components/AddFeedback/AddFeedbackForm";
import LoginPage from "./components/Login/LoginPage";
import { NotificationProvider } from "./NotificationContext";

const App = () => {
  return (
    <div>
      <NotificationProvider>
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/add-feedback" element={<AddFeedbackForm />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </NotificationProvider>
    </div>
  );
};

export default App;
