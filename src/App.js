//react imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//alert imports
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

//import components
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

const App = () => {
  return (
    <Router>
      <Provider template={AlertTemplate} {...options}>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
};

export default App;
