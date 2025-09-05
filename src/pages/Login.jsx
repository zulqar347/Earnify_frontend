import React, { useState } from "react";
import "../styles/Login.css";
import api from "../api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState('')

  
  function handleSubmit(formData){
    const username = formData.get('username')
    const password = formData.get('password')
    api.post('token/', {username, password})
    .then(res => {
      localStorage.setItem('access_token', res.data.access),
      localStorage.setItem('refresh_token', res.data.refresh)
      navigate("/home")
    })
    .catch(err=> console.error(err))
  }

  return (
    <div className="login-container">
      <form className="login-form" action={handleSubmit}>
        <h2 className="form-title">Welcome Back</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <button type="submit" className="login-btn">Log In</button>

        <p className="signup-text">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
