import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";
const CLogin = () => {
  const initialLoginData = { Email: "", Password: "" };
  const [LoginData, setLoginData] = useState(initialLoginData);
  const [Error, setError] = useState({});
  const handleChange = (event) => {
    const { name, value } = event.target;
    setError({ ...Error, [name]: ValidateData(name,value) });
    setLoginData({ ...LoginData, [name]: value });
  };
  const handleFocus = (event) => {
    const { name, value } = event.target;
    setError({ ...Error, [name]: "" });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("loginData is ", LoginData);
  };
  const ValidateData = (FieldName,value) => {
    let Error = "";
    switch (FieldName) {
      case "Email":
        if (value.length < 5) {
          Error = "Email length should be greater than 5";
          break;
        }
      case "Password":
        if (value.length < 5) {
          Error = "Password length should be greater than 5";
          break;
        }
      default:
        break;
    }
    return Error;
  };
  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="Email"
            value={LoginData.Email}
            onChange={handleChange}
            onFocus={handleFocus}
          ></input>{
            Error.Email && <p>{Error.Email}</p>
          }
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="Password"
            value={LoginData.Password}
            onChange={handleChange}
            onFocus={handleFocus}
          ></input>{Error.Password && <p>{Error.Password}</p>}
        </div>
        <Link to="/register">Register</Link>
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

export default CLogin;
