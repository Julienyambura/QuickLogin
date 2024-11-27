import React from "react";
import "../src/App.css";
const Signup = () => {
  return (
    <div className="sign-up-container">
      <form className="sign-up-form">
        <label htmlFor="Username">Username</label>
        <input type="text" placeholder="Username" />
        <label htmlFor="Email">Email</label>
        <input type="email" autoComplete="off" placeholder="Email" />
        <label htmlFor="Password">Password</label>
        <input type="password" placeholder="Password" />
        <button type="submit">Signup</button>
      </form>
      <h1>Sign Up</h1>
    </div>
  );
};
