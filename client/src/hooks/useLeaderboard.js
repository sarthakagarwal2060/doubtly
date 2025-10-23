import { useState, useEffect } from "react";
import axios from "axios";

function useLeaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLeaderboard = async () => {
    const token = localStorage.getItem("token");
    setLoading(true);
    
    try {
      const response = await axios.get(
        "https://doubtly-backend.onrender.com/api/userDetails/leaderboard",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      
      setLeaderboardData(response.data.result);
      // console.log(response.data.result);
      
      setLoading(false);
    } catch (err) {
      setError(err.message || "Failed to fetch leaderboard data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return { leaderboardData, loading, error };
}

export default useLeaderboard; 