import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";
import AddFeedback from "./components/AddFeedback/AddFeedback";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/addFeedback" element={<AddFeedback />} />
      </Routes>
    </>
  );
};

export default App;
