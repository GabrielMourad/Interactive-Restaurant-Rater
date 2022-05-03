import React, { Fragment, useState } from "react";
import "../components/styles.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const Register = ({ setAuth }) => {
  const [inputs, setInputs] = useState({ email: "", password: "", name: "" });
  const { email, password, name } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch("http://localhost:3006/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const parseResponse = await response.json();
      if (parseResponse.token) {
        localStorage.setItem("token", parseResponse.token);
        setAuth(true);
        toast.success("Registered successfully!");
      } else {
        setAuth(false);
        toast.error(parseResponse);
      }

      localStorage.setItem("token", parseResponse.token);
      setAuth(true);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center my-5">Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control my-3"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control my-3"
          value={password}
          onChange={(e) => onChange(e)}
        />
        <input
          type="text"
          name="name"
          placeholder="Username"
          className="form-control my-3"
          value={name}
          onChange={(e) => onChange(e)}
        />
        <button className="btn btn-success btn-block">Submit</button>
      </form>
      <Link to="/login">Login </Link>
    </Fragment>
  );
};
export default Register;
