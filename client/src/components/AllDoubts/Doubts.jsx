import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DoubtCard from "../dashboard/DoubtCard";
import { Flex, Select } from "@radix-ui/themes";
import Loader from "../Loader";

function Doubts() {
  const navigate = useNavigate();
  const [allDoubts, setAllDoubts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filterSubject, setFilterSubject] = useState("all");
  const [filterDoubt, setFilterDoubt] = useState("all");

  function handleDoubtClick(doubt) {
    navigate(`/dashboard/doubt/${doubt.id}`);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchAllDoubts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://doubtly-backend.onrender.com/api/doubt/show",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setAllDoubts(response.data.result);
    
      setLoading(false);
    };
    fetchAllDoubts();
  }, []);

  if (loading) {
    return <div><Loader /></div>;
  }

  // console.log(allDoubts);
  // allDoubts.forEach
  // ((doubt) => {
  //   console.log(doubt.date);
  // } 
  // )

  
  return (
    <>
      <main className="pt-16 pl-72 pr-8 bg-primary">
        <div className="container py-6 space-y-8">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">All Doubts</h1>
            </div>
            <Flex gap="4"> 
              <select  id="filterSubject" className="text-black dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-2 py-3" 
                onChange={(e) => {
                  // console.log(e.target.value)
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
                <option value="latest">Latest</option>
                <option value="unanswered">Unanswered</option>
              </select>
            </Flex>
          </div>
          <div className="grid gap-4">

            {(filterDoubt === "all") ? allDoubts.map((doubt) => (
              filterSubject === "all" || doubt.tags.includes(filterSubject) ? (
                <DoubtCard
                  key={doubt._id || doubt.title}
                  {...doubt}
                  onClick={() => handleDoubtClick(doubt)}
                />
              ) : null
            )) : (filterDoubt === "latest") ? allDoubts.sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((doubt) => (
                  filterSubject === "all" || doubt.tags.includes(filterSubject) ? (
                    <DoubtCard
                      key={doubt._id || doubt.title}
                      {...doubt}
                      onClick={() => handleDoubtClick(doubt)}
                    />
                  ) : null
              )) :
              allDoubts.filter((doubt) => doubt.answerCount === 0)
              .map((doubt) => (
                filterSubject === "all" || doubt.tags.includes(filterSubject) ? (
                  <DoubtCard
                    key={doubt._id || doubt.title}
                    {...doubt}
                    onClick={() => handleDoubtClick(doubt)}
                  />
                ) : null
              ))}
            
          </div>
        </div>
      </main>
    </>
  );
}

export default Doubts;
