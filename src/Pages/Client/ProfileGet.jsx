import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios
import Header from "../../Components/Header";

const ProfileGet = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users/3");
        setData(response.data.data); // Adjust to `data.data` based on API response
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData(); // Call the async function
  }, []); // Empty dependency array to run only once

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />
      <h1>Profile Page</h1>
      <div>
        <label>First Name</label>
        <input
          type="text"
          name="first_name"
          value={data.first_name || ""}
          readOnly
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          name="last_name"
          value={data.last_name || ""}
          readOnly
        />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={data.email || ""} readOnly />
      </div>
      <div>
        <label>Avatar</label>
        <img src={data.avatar} alt="ProfilePhoto" />
      </div>
    </>
  );
};

export default ProfileGet;