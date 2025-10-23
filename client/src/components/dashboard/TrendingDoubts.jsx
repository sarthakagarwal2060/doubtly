import { Button } from "@radix-ui/themes";
import { PlusCircle } from "lucide-react";
import DoubtCard from "./DoubtCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function TrendingDoubts() {
  const navigate = useNavigate();
  const [trendingDoubts, setTrendingDoubts] = useState([]);

  function postdoubt() {
    navigate("/dashboard/postdoubt");
  }

  function handleDoubtClick(doubt) {
    navigate(`/dashboard/doubt/${doubt.id}`);
  }
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchTrendingDoubts = async () => {
      const response = await axios.get(
        "https://doubtly-backend.onrender.com/api/doubt/trending",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setTrendingDoubts(response.data.result);
    };
    fetchTrendingDoubts();
  }, []);
  
  return (
    <>
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold">Trending Doubts</h2>
          <Button color="blue" size="3" radius="large" onClick={postdoubt}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Post a Doubt
          </Button>
        </div>
        <div className="grid gap-4">
          {trendingDoubts.slice(0,5).map((doubt) => (
          //  console.log(doubt)
            <DoubtCard 
              key={doubt.id || doubt.title}
              {...doubt} 
              onClick={() => handleDoubtClick(doubt)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
