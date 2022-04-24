import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./components/Homepage/Homepage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
      </Routes>
    </>
  );
};

export default App;
