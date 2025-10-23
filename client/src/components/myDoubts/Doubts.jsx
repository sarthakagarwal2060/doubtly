import React from "react";
import DoubtCard from "../dashboard/DoubtCard";
import { Flex, Select } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import  { useState, useEffect } from "react";
import axios from "axios";

function Doubts() {
  const navigate = useNavigate();

  function handleDoubtClick(doubt) {
    navigate(`/dashboard/doubt/${doubt.id}`);
  }

  const [myDoubts, setMyDoubts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterSubject, setFilterSubject] = useState("all");
  const [filterDoubt, setFilterDoubt] = useState("all");
  useEffect(() => {
    const token = localStorage.getItem("token");
    setLoading(true);
    const fetchMyDoubts = async () => {
      const response = await axios.get(
        "https://doubtly-backend.onrender.com/api/doubt/mydoubt",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setMyDoubts(response.data.result);
      setLoading(false);
    };
    fetchMyDoubts();
  }, []);

  if (loading) {
    return (<div><Loader /></div>);
  }

  // console.log(myDoubts);
  

  if(myDoubts){
    return (
      <>
        <main className="pt-16 pl-72 pr-8 bg-primary">
          <div className="container py-6 space-y-8 ">
            <div className="flex items-center justify-between gap-4 ">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">My Doubts</h1>
              </div>
              <Flex gap="4">
                <select  id="filterSubject" className="text-black dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-3" 
                  onChange={(e) => {
                    setFilterSubject(e.target.value);
                  }
                }>  
                  <option value="all">Filter by Subject</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="dsa">DSA</option>
                  <option value="ai/ml">AI/ML</option>
                  <option value="maths">Maths</option>
                </select>

                <select className="text-black dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg p-2" id="filterDoubt"
                  onChange={(e) => {
                    setFilterDoubt(e.target.value);
                  }}
                >  
                  <option value="all">Filter Doubt</option>
                  <option value="answered">Answered</option>
                  <option value="unanswered">Unanswered</option>
                </select>
              </Flex>
            </div>
            <div className="grid gap-4">
              {(filterDoubt === 'all') ? myDoubts.map((doubt) => (
                filterSubject === 'all' || doubt.tags.includes(filterSubject) ? (
                <DoubtCard
                  key={doubt._id || doubt.title}
                  {...doubt}
                  className="bg-white/50 hover:bg-white/80 transition-colors"
                  onClick={() => handleDoubtClick(doubt)}
                />
                ) : null
              )) :
              (filterDoubt === 'answered') ? myDoubts.filter((doubt) => doubt.status === 'verified solution available' || doubt.status === 'unverified solution available')
              .map((doubt) => (
                filterSubject === 'all' || doubt.tags.includes(filterSubject) ? (
                <DoubtCard
                  key={doubt._id || doubt.title}
                  {...doubt}
                  className="bg-white/50 hover:bg-white/80 transition-colors"
                  onClick={() => handleDoubtClick(doubt)}
                />
                ) : null
              )) : 
              (filterDoubt === 'unanswered') ? myDoubts.filter((doubt) => doubt.status === 'no solution available')
              .map((doubt) => (
                filterSubject === 'all' || doubt.tags.includes(filterSubject) ? (
                <DoubtCard
                  key={doubt._id || doubt.title}
                  {...doubt}
                  className="bg-white/50 hover:bg-white/80 transition-colors"
                  onClick={() => handleDoubtClick(doubt)}
                />
                ) : null
              )):null}
            </div>
          </div>
        </main>
      </>
    );
  }
  else {
    return (
      <>
        <main className="pt-16 pl-72 pr-8 h-screen bg-primary ">
          <div className="container py-6 space-y-8 ">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">My Doubts</h1>
              </div>
            </div>
            <h4 className="text-md font-semibold text-textSecondary">
              No doubts posted yet...
            </h4>
          </div>
        </main>
      </>
    )
  }
}

export default Doubts;
