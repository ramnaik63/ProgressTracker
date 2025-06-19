import React from 'react';
import './Login.css'; 

const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
