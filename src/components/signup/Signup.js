//react imports
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//custom imports
import { useAlert } from "react-alert";
import { useGoogleOneTapLogin } from "react-google-one-tap-login";
import GoogleOneTapLogin from "react-google-one-tap-login";
import { useGoogleLogin } from "@react-oauth/google";
import reactjsAlert from "reactjs-alert";

//css import
import "./Signup.css";

//icon imports
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import ReactjsAlert from "reactjs-alert";

//client id
const clientId =
  "481701370341-hrlv8nd3s6ppvsjlqrream8noefj14kv.apps.googleusercontent.com";

const Signup = () => {
  //navigation
  const navigate = useNavigate();

  //userData to be posted on API
  const [userData, setUserData] = useState({});

  //values on user input
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    newsletter: false,
  });

  //handle alert state
  const [alert, setAlert] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState(
    "You have completed signup successfully. Welcome to website."
  );

  //errors
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  //validation for every keystroke
  useEffect(() => {
    validation(values);
  }, [values]);

  //function to setData for every key stroke
  const setData = (e, key) => {
    setValues({
      ...values,
      [key]: e.target.value,
    });
  };

  //function to handle newsLetter state
  const setNewsLetter = () => {
    setValues({
      ...values,
      newsletter: !values.newsletter,
    });
  };

  //custom validation function
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
    } else {
      setErrors({
        ...errors,
        email: "",
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

  //copy values to userData for JSON format
  const submitUserDetails = () => {
    setUserData(values);
  };

  //handle submit button functions
  const handleSubmit = (e) => {
    e.preventDefault();

    submitUserDetails();

    if (!errors.email) {
      setAlertUser(true);
    }
  };

  //google auth
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      console.log(tokenResponse);

      if (tokenResponse.access_token) {
        window.localStorage.setItem("auth-key", tokenResponse.access_token);

        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    },
  });

  //alertuser
  const [alertUser, setAlertUser] = useState(false);

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

                  {errors.email && <h4>{errors.email}</h4>}
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
                  <input
                    type="checkbox"
                    id="newsletter"
                    value={values.newsletter}
                    onChange={() => setNewsLetter()}
                  />
                  <label htmlFor="newsletter">
                    Subscribe to our newsletter
                  </label>
                </div>
                <div className="signup-btn">
                  <button onClick={handleSubmit}>
                    <h4>SIGN UP</h4>
                  </button>
                  {alertUser && (
                    <h4 className="alert">
                      SIgnup successful. Welcome to website
                    </h4>
                  )}
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
                  <FaGoogle onClick={() => login()} />
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
