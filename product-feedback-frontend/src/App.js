import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import AddFeedbackForm from "./components/AddFeedback/AddFeedbackForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/add-feedback" element={<AddFeedbackForm />} />
      </Routes>
    </>
  );
};

export default App;
