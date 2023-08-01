import React, { useState } from "react";
import { useNavigate } from "react-router";

const Signup = (props) => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      navigate("/");
      props.showAlert("Account Created Successfully!", "success");
    } else {
      props.showAlert("Invalid Details", "danger");
    }


  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const [TorF, setTorF] = useState({
    TorF: false
  });

  const checkCon = () => {
    const password = credentials.password;
    const cpassword = credentials.cpassword;

    // Check if password and confirm password match
    const passwordsMatch = password === cpassword;

    // Check if the password meets complexity requirements
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialSymbolRegex = /[!@#$%^&*()_+{}:;<>,.?~`]/;
    const numberRegex = /\d/;
    const isComplexPassword =
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      specialSymbolRegex.test(password) &&
      numberRegex.test(password);

    // Update the 'TorF' state based on whether passwords match and if password is complex
    setTorF(passwordsMatch && isComplexPassword);
  };

  return (
    <div>
      <body className="align">
        <div className="grid">
          <form onSubmit={handleSubmit} className="form login">
            <div className="form__field">
              <label htmlFor="name">
                <svg className="icon">
                  <use href="#icon-user"></use>
                </svg>
                <span className="hidden">Name</span>
              </label>
              <input
                id="login__username"
                type="text"
                name="name"
                className="form__input"
                onChange={onChange}
                placeholder="Name"
                aria-describedby="emailHelp"
                required
              />
            </div>

            <div className="form__field">
              <label htmlFor="email">
                <svg className="icon">
                  <use href="#icon-user"></use>
                </svg>
                <span className="hidden">Email address</span>
              </label>
              <input
                id="login__username"
                type="email"
                name="email"
                className="form__input"
                value={credentials.email}
                onChange={onChange}
                placeholder="Email"
                aria-describedby="emailHelp"
                required
              />
            </div>

            <div className="form__field">
              <label htmlFor="password">
                <svg className="icon">
                  <use href="#icon-lock"></use>
                </svg>
                <span className="hidden">Password</span>
              </label>
              <input
                type="password"
                onChange={onChange}
                onClick={checkCon}
                name="password"
                id="password"
                className="form__input"
                placeholder="Password"
                required
              />
            </div>
            <div className="form__field">
              <label htmlFor="cpassword">
                <svg className="icon">
                  <use href="#icon-lock"></use>
                </svg>
                <span className="hidden">Confirm Password</span>
              </label>
              <input
                type="password"
                onChange={onChange}
                onClick={checkCon}
                name="cpassword"
                id="cpassword"
                className="form__input"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="form__field">
              <input type="submit" name="submitbtn" disabled={!TorF} value="Sign Up" />
            </div>
          </form>

          <p className="text--center">
            Already member? <a href="/login">Log-In now</a>{" "}
            <svg className="icon">
              <use href="#icon-arrow-right"></use>
            </svg>
          </p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" className="icons">
          <symbol id="icon-arrow-right" viewBox="0 0 1792 1792">
            <path d="M1600 960q0 54-37 91l-651 651q-39 37-91 37-51 0-90-37l-75-75q-38-38-38-91t38-91l293-293H245q-52 0-84.5-37.5T128 1024V896q0-53 32.5-90.5T245 768h704L656 474q-38-36-38-90t38-90l75-75q38-38 90-38 53 0 91 38l651 651q37 35 37 90z" />
          </symbol>
          <symbol id="icon-lock" viewBox="0 0 1792 1792">
            <path d="M640 768h512V576q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28H416q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V576q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z" />
          </symbol>
          <symbol id="icon-user" viewBox="0 0 1792 1792">
            <path d="M1600 1405q0 120-73 189.5t-194 69.5H459q-121 0-194-69.5T192 1405q0-53 3.5-103.5t14-109T236 1084t43-97.5 62-81 85.5-53.5T538 832q9 0 42 21.5t74.5 48 108 48T896 971t133.5-21.5 108-48 74.5-48 42-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zm-320-893q0 159-112.5 271.5T896 896 624.5 783.5 512 512t112.5-271.5T896 128t271.5 112.5T1280 512z" />
          </symbol>
        </svg>
      </body>
    </div>
  );
};

export default Signup;
