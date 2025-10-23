import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";

const PublicRoute = ({ children }) => {
  const [isValid, setIsValid] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const validateToken = async () => {
      try {
        const response = await axios.post(
          "https://doubtly-backend.onrender.com/api/auth/check",
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
            withCredentials: true,
          }
        );
        if (response.status === 200) {
          setIsValid(true);
        }
      } catch (error) {
        if (error.response) {
          const message = error.response.data?.message || "";

          if (error.response.status === 401) {
            if (message.includes("expired")) {
              console.log("Token expired. Attempting to refresh...");
              await refreshToken();
            } else {
              console.log("Invalid token. Proceeding as public user...");
              handleLogout();
            }
          } else {
            console.log("Unexpected error:", error);
            handleLogout();
          }
        } else {
          console.log("Invalid token. Proceeding as public user...");
          setIsValid(false);
        }
      }
    };
    const refreshToken = async () => {
      try {
        const response = await axios.post(
          "https://doubtly-backend.onrender.com/api/auth/refreshToken",
          {},
          { withCredentials: true }
        );

        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setIsValid(true);
        } else {
          console.error("Token refresh failed. Logging out...");
          handleLogout();
        }
      } catch (error) {
        console.error("Failed to refresh token. Logging out...");
        handleLogout();
      }
    };

    const handleLogout = () => {
      localStorage.removeItem("token");
      setIsValid(false);
    };

    if (token) {
      validateToken();
    } else {
      setIsValid(false);
    }
  }, [token]);

  if (isValid === null) {
    return <div><Loader /></div>;
  }

  return isValid ? <Navigate to="/dashboard" /> : children;
};

export default PublicRoute;
