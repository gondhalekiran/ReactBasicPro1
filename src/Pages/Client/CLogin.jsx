// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Header from "../../Components/Header";
// const CLogin = () => {
//   const initialLoginData = { Email: "", Password: "" };
 
//   const [LoginData, setLoginData] = useState(initialLoginData);
//   const [Error, setError] = useState({});
//   const [x, setX] = useState("");
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setError({ ...Error, [name]: ValidateData(name,value) });
//     setLoginData({ ...LoginData, [name]: value });
//     setX(value);
//      console.log("loginData is ", LoginData);
//      console.log("x is ", x);
//   };
  
 
//   const handleFocus = (event) => {
//     const { name, value } = event.target;
//     setError({ ...Error, [name]: "" });
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("loginData is ", LoginData);
//   };
//   const ValidateData = (FieldName,value) => {
//     let Error = "";
//     switch (FieldName) {
//       case "Email":
//         if (value.length < 5) {
//           Error = "Email length should be greater than 5";
//           break;
//         }
//       case "Password":
//         if (value.length < 5) {
//           Error = "Password length should be greater than 5";
//           break;
//         }
//         case "x":
//           if (value.length < 5) {
//             Error = "x length should be greater than 5";
//             break;
//           } 
//       default:
//         break;
//     }
//     return Error;
//   };
//   return (
//     <>
//       <Header />
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             name="Email"
//             value={LoginData.Email}
//             onChange={handleChange}
//             onFocus={handleFocus}
//           ></input>{
//             Error.Email && <p>{Error.Email}</p>
//           }
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             name="Password"
//             value={LoginData.Password}
//             onChange={handleChange}
//             onFocus={handleFocus}
//           ></input>{Error.Password && <p>{Error.Password}</p>}
//         </div>
//         <div>
//           <label>var X</label>
//           <input
//             type="text"
//             name="x"
//             value={value}
//             onChange={handleChange} 
//             onFocus={handleFocus} // Clear error on focus
//           /> {Error.x && <p>{Error.x}</p>}
//         </div>
//         <Link to="/register">Register</Link>
//         <button type="submit">Sign In</button>
//       </form>
//     </>
//   );
// };

//export default CLogin;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Header";

const CLogin = () => {
  const initialLoginData = { Email: "", Password: "" };
  const [LoginData, setLoginData] = useState(initialLoginData);
  const [Error, setError] = useState({});
  const [x, setX] = useState("dsdsds"); // Initialize `x` state

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "x") {
      setX(value); // Update `x` state with the typed value
   
    } else {
      setLoginData({ ...LoginData, [name]: value }); // Update LoginData
     
    }
    setError({ ...Error, [name]: ValidateData(name, value) }); // Validate LoginData
    console.log("LoginData:", LoginData);
    console.log("x:", x);
  };

  const handleFocus = (event) => {
    const { name } = event.target;
    setError({ ...Error, [name]: "" }); // Clear error for the focused field
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted LoginData:", LoginData);
    console.log("x:", x);
  };

  const ValidateData = (FieldName, value) => {
    let error = "";
    switch (FieldName) {
      case "Email":
        if (value.length < 5) {
          error = "Email length should be greater than 5";
        }
        break;
      case "Password":
        if (value.length < 5) {
          error = "Password length should be greater than 5";
        }
        break;
      case "x":
        if (value.length < 5) {
          error = "x length should be greater than 5";
        }
        break;
      default:
        break;
    }
    return error;
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
          />
          {Error.Email && <p>{Error.Email}</p>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="Password"
            value={LoginData.Password}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          {Error.Password && <p>{Error.Password}</p>}
        </div>
        <div>
          <label>var X</label>
          <input
            type="text"
            name="x"
            value={x} // Bind `x` state to the input value
            onChange={handleChange} // Update `x` when the input changes
            onFocus={handleFocus} // Clear error on focus
          />
          {Error.x && <p>{Error.x}</p>}
        </div>
        <Link to="/register">Register</Link>
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};
export default CLogin;