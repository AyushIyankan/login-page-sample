//react imports
import React, { useEffect, useState } from "react";

//alert
import { useAlert } from "react-alert";

//css import
import "./Signup.css";

//icon imports
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";

const Signup = () => {
  //userData to be posted on API
  const [userData, setUserData] = useState({});

  //values on user input
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  //errors
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  //function to setData for every key stroke
  const setData = (e, key) => {
    setValues({
      ...values,
      [key]: e.target.value,
    });
  };

  const validation = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "Email cannot be empty";
      setErrors({
        ...errors,
        email: "Email cannot be empty",
      });
    } else if (!/\S+@\S+.\S+/.test(values.email)) {
      errors.email = "Enter a valid email address";
      setErrors({
        ...errors,
        email: "Enter a valid email address",
      });
    }

    if (!values.password) {
      errors.password = "Password cannot be empty";
      setErrors({
        ...errors,
        password: "Password cannot be empty",
      });
    } else if (values.password < 6) {
      errors.password = "Password must be at least 6 characters long";
      setErrors({
        ...errors,
        password: "Password must be at least 6 characters long",
      });
    }

    return errors;
  };

  useEffect(() => {
    validation(values);
  }, [values]);

  //copy values to userData for JSON format
  const submitUserDetails = (e) => {
    e.preventDefault();

    setUserData(values);
  };

  console.log({ errors: errors });

  return (
    <div className="signup__container">
      <div className="signup__sub-container">
        <div className="signup__left">
          <div className="main__title">
            <h2>
              The best offer <br /> <span>for your business</span>
            </h2>
          </div>
          <div className="main__para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum
              tortor risus id commodo quis nisi nunc. Aenean sit libero,
              penatibus consectetur enim. Amet egestas leo donec duis.
            </p>
          </div>
        </div>
        <div className="signup__right">
          <div className="signup__form">
            <form>
              <div className="main__form">
                <div className="name-flex">
                  <div className="first-name">
                    <input
                      type="text"
                      placeholder="First name"
                      value={values.firstName}
                      onChange={(e) => setData(e, "firstName")}
                    />
                  </div>
                  <div className="last-name">
                    <input
                      type="text"
                      placeholder="Last name"
                      value={values.lastName}
                      onChange={(e) => setData(e, "lastName")}
                    />
                  </div>
                </div>
                <div className="email-address">
                  <input
                    type="text"
                    placeholder="Email address"
                    value={values.email}
                    onChange={(e) => setData(e, "email")}
                  />
                </div>
                <div className="password">
                  <input
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={(e) => setData(e, "password")}
                  />
                </div>
                <div className="subscribe">
                  <input type="checkbox" id="newsletter" />
                  <label htmlFor="newsletter">
                    Subscribe to our newsletter
                  </label>
                </div>
                <div className="signup-btn">
                  <button onClick={submitUserDetails}>
                    <h4>SIGN UP</h4>
                  </button>
                </div>
              </div>
            </form>
            <div className="signup__sub">
              <div className="orsignupwith-text">
                <h4>or sign up with:</h4>
              </div>
              <div className="social-login-flex">
                <div className="facebook">
                  <FaFacebookF />
                </div>
                <div className="google">
                  <FaGoogle />
                </div>
                <div className="twitter">
                  <FaTwitter />
                </div>
                <div className="github">
                  <FaGithub />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
