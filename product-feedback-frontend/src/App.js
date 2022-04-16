import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import AddFeedbackPage from "./components/AddFeedback/AddFeedbackPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/addFeedback" element={<AddFeedbackPage />} />
      </Routes>
    </>
  );
};

export default App;
