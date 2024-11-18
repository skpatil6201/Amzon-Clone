import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../firebase";
import { useStateValue } from "../StateProvider";
import { ToastContainer } from 'react-toastify';

const UserLog = () => {
  const [{}, dispatch] = useStateValue();
  const [form, setForm] = useState({ email: "", password: "", username: "" });
  const [signUp, setSignUp] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, username } = form;

    const authFn = signUp
      ? createUserWithEmailAndPassword(auth, email, password).then(() =>
          dispatch({ type: "SET_USER", user: { username, email } })
        )
      : signInWithEmailAndPassword(auth, email, password);

    authFn.then(() => alert(signUp ? "Account Created Successfully!" : "Login Successfully!"))
      .catch((err) => alert("Invalid Email or Password"));
  };

  return (
    <div className="Log flex">
      <Link to="/"><img src="./amazon-logo.png" alt="Amazon Logo" /></Link>
      <ToastContainer />
      <form className="flex" onSubmit={handleSubmit}>
        <h3>{signUp ? "Sign Up" : "Sign In"}</h3>
        {signUp && (
          <div>
            <label>Username</label>
            <input type="text" name="username" onChange={handleChange} />
          </div>
        )}
        <label>Email</label>
        <input type="email" name="email" onChange={handleChange} />
        <label>Password</label>
        <input type="password" name="password" onChange={handleChange} />
        <Button type="submit">{signUp ? "Sign Up" : "Sign In"}</Button>
      </form>
      <div>
        <hr />
        <p>New to Amazon?</p>
        <button onClick={() => setSignUp((prev) => !prev)}>
          {signUp ? "Sign In" : "Create an Account"}
        </button>
      </div>
    </div>
  );
};

export default UserLog;
