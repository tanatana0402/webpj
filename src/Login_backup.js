import React from "react";
import GoogleLoginButton from "./Googlelogin";
import { useState, useEffect } from "react";

export default function (props) {
  let [signMode, setSignMode] = useState("signin")

  const changeSignMode = () => {
    setSignMode(signMode === "signin" ? "signup" : "signin")
  }

  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }

  const onClickLogin = () => {
    console.log('click login')
  }

  if (signMode === "signin") {
    return (
      <div className="Login-form-main">
        <form className="Login-form">
          <div className="Login-form-content">
            <h3 className="Login-form-title">Sign In</h3>
            <div className="text-center">
              registered{" "}
              <span className="link-primary" onClick={changeSignMode}>Sign Up</span>
            </div>
            <GoogleLoginButton></GoogleLoginButton>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input 
                type="email" 
                placeholder="Enter email" 
                className="form-control mt-1"
                name="input_id"
                value={inputId} 
                onChange={handleInputId}></input>
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Enter password" 
                className="form-control mt-1" 
                name="input_pw"
                value={inputPw}
                onChange={handleInputPw}></input>
            </div>
            <div className="d-grid gap2 mt-3">
              <button type="submit" className="btn btn-primary" onChange={onClickLogin}>Submit</button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Login-form-main">
      <form className="Login-form">
        <div className="Login-form-content">
          <h3 className="Login-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeSignMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}