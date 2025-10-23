import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function fetchUserDetails() {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchDetails = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://doubtly-backend.onrender.com/api/userDetails",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      const fetchedDetails = response.data.result;
      setUserDetails(fetchedDetails);
      localStorage.setItem("firstName", fetchedDetails.firstName);
      localStorage.setItem("email", fetchedDetails.email);
      localStorage.setItem("fullName", fetchedDetails.fullName);
      localStorage.setItem("joinedDate", fetchedDetails.joinedDate);
  
      setLoading(false);
    };
    fetchDetails();
  }, []);

  return {userDetails, loading};
}
export default fetchUserDetails;
