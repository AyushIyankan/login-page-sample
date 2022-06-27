import React from "react";

const Home = () => {
  const googleAuthKey = window.localStorage.getItem("auth-key");

  return (
    <div>
      <h2>
        Hey there, You are{" "}
        {googleAuthKey ? "logged in successfully" : "logged out"}
      </h2>
      {!googleAuthKey && (
        <button>
          <a href="/signup">Sign up</a>
        </button>
      )}
      <br />
      <h4>{googleAuthKey && `Your auth key is : ${googleAuthKey}`}</h4>
    </div>
  );
};

export default Home;
