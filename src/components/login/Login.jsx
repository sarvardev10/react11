import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export const Login = () => {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = form;
    console.log("Form Data:", form); // Debugging: log the form data
    if (username === "a" && password === "1") {
      console.log("Navigation triggered"); // Debugging: confirm navigation is triggered
      navigate("/main");
    } else {
      alert("Access denied");
    }
  };

  return (
    <div className="container_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="wrapper">
              <div className="card">
                <div className="card-header">
                  <h1 className="text-center">Login</h1>
                </div>
                <div className="card-body">
                  <form id="submit" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      onChange={handleChange}
                      placeholder="username"
                      className="form-control my-2"
                      name="username"
                    />
                    <input
                      type="password"
                      onChange={handleChange}
                      placeholder="password"
                      className="form-control my-2"
                      name="password"
                    />
                    <button type="submit" className="btn">
                      login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
