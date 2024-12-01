import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Components/Header";

const ProfileGet = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [rawResponse, setRawResponse] = useState(null); // State to store the full raw response

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://reqres.in/api/users/3");
        setRawResponse(response); // Save the full response
        setData(response.data.data); // Extract user data
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <Header />
      <h1>Profile Page</h1>
      <h3>Full Response</h3>
      <pre>{JSON.stringify(rawResponse, null, 2)}</pre> {/* Print full response */}
      
      <h3>User Details</h3>
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
        <img
          src={data.avatar || ""}
          alt={data.first_name ? `${data.first_name}'s Avatar` : "Avatar"}
        />
      </div>
    </>
  );
};

export default ProfileGet;