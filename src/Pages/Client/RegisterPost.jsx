import React, { useState } from "react";
import Header from "../../Components/Header";
import axios from 'axios';
const RegisterPost = () => {
  const initalRegisterData = { Name: "", Job: "" };
  const [registerData, setRegisterData] = useState(initalRegisterData);
  const [error, setError] = useState({});
  const [response, setResponse] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterData((prevRegisterData) => ({
      ...prevRegisterData,
      [name]: value,
    }));
    setError((prevError) => ({
      ...prevError,
      [name]: validateField(name, value),
    }));
  };
  const validateField = (FieldName, value) => {
    let ErrorMsg;
    switch (FieldName) {
      case "Name":
        if (value.length < 5) {
          ErrorMsg = "name should be greater than 5";
        }
        break;
      case "Job":
        if (value.length < 5) {
          ErrorMsg = "Job should be greater than 5";
        }
        break;
      default:
        break;
    }
    return ErrorMsg;
  };
  const handleFocus = (event) => {
    const { name } = event.target;
    setError((prevError) => ({ ...prevError, [name]: "" }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let hasError = false;
    const ErrorObj = {};
    for (let FieldName in registerData) {
      const value = registerData[FieldName];
      const error = validateField(FieldName, value);
      if (error) {
        ErrorObj[FieldName] = error;
        hasError = true;
      }
    }
    setError(ErrorObj);
    if (!hasError) {
      console.log("Form submitted:", registerData);
      try {
        const res = await axios.post("https://reqres.in/api/users", registerData);
        setResponse(res.data); // Save the response
        console.log("Success:", res.data);
      } catch (error) {
        console.error("Error:", error.response || error.message);
      }
    }
  };
  return (
    <>
      <Header />
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="Name"
            value={registerData.Name}
            onChange={handleChange}
            onFocus={handleFocus}
          ></input>
          {error.Name && <p>{error.Name}</p>}
        </div>
        <div>
          <label>Job</label>
          <input
            type="text"
            name="Job"
            value={registerData.Job}
            onChange={handleChange}
            onFocus={handleFocus}
          ></input>
          {error.Job && <p>{error.Job}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      {response && (
        <div>
          <h3>Response from Server:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default RegisterPost;
