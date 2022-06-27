import React from "react";

const Home = () => {
  const googleAuthKey = window.localStorage.getItem("auth-key");

  return (
    <div>
      <h2>Hey there, You are logged in successfully</h2>
      <br />
      <h4>Your auth key is : {googleAuthKey}</h4>
      <button onClick={() => alert("hi")}>alert</button>
    </div>
  );
};

export default Home;
