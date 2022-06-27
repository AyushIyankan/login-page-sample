//react imports
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//custom imports
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { GoogleOAuthProvider } from "@react-oauth/google";

//import components
import Home from "./components/home/Home";
import Signup from "./components/signup/Signup";
import Restricted from "./components/restricted/Restricted";

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
};

//retrieve auth key for protected routes
const googleAuthKey = window.localStorage.getItem("auth-key");

const App = () => {
  return (
    <Router>
      <GoogleOAuthProvider clientId="481701370341-hrlv8nd3s6ppvsjlqrream8noefj14kv.apps.googleusercontent.com">
        <Provider template={AlertTemplate} {...options}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </Provider>
      </GoogleOAuthProvider>
    </Router>
  );
};

export default App;
