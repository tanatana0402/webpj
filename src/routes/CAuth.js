import React, { useState } from "react";
import { authService, firebaseInstance } from "../fbase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [newAccount, setNewAccount] = useState(true);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      if (newAccount) {
        await authService.createUserWithEmailAndPassword(email, password);
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div className="Login-form-main">
      <form className="Login-form" onSubmit={onSubmit}>
        <div className="Login-form-content">
          <h3 className="Login-form-title">{newAccount ? "Sign Up" : "Sign In"}</h3>
          <div className="text-center">
            {newAccount ? "Already registered?" : "Not registered?"}{" "}
            <span className="link-primary" onClick={toggleAccount}>{newAccount ? "Sign In" : "Sign Up"}</span>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              className="form-control mt-1"
              name="email"
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              className="form-control mt-1"
              name="password"
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="d-grid gap2 mt-3">
            <input className="btn btn-primary" type="submit" value={newAccount ? "Creaet Account" : "Log In"} />
            {error}
          </div>
          <div className="row">
            <div className="col-6">
              <img src="img/5050_google.png" className="img-fluid" alt="profile" onClick={onSocialClick} name="google" />
            </div>
            <div className="col-6">
              <img src="img/5050_github.png" className="img-fluid" alt="profile" onClick={onSocialClick} name="github" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;