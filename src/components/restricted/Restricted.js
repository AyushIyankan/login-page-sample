import React from "react";
import { Link } from "react-router-dom";

const Restricted = () => {
  return (
    <div>
      <h2>Please login to access content</h2>
      <Link to={"/signup"}>
        <button>Go to signup</button>
      </Link>
    </div>
  );
};

export default Restricted;
