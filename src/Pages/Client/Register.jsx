import React from 'react'
import Header from '../../Components/Header'

const Register = () => {
  return (
    <><Header/>
    <h1>Register</h1>
      <div>
        <label>Name</label>
        <input type='text'></input>
      </div>
      <div>
        <label>Job</label>
        <input type='job'></input>
      </div>
    </>
  );
}

export default Register;
