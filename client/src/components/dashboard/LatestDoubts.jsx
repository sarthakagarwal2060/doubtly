import DoubtCard from "./DoubtCard";
import { Select } from "@radix-ui/themes";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LatestDoubts() {
  const navigate = useNavigate();

  function handleDoubtClick(doubt) {
    navigate(`/dashboard/doubt/${doubt._id}`);
  }

  const latestDoubts = [
    {
      _id: "react-performance",
      title: "How to optimize React performance?",
      tags: ["React", "Performance"],
      username: "perf_guru",
      answerCount: 2,
      upvotes: 4,
      timeAgo: "1h ago",
      description: "I'm working on a React application that's getting slow as it grows. Looking for best practices to optimize rendering and state management."
    },
    {
      _id: "typescript-generics",
      title: "TypeScript generics explained",
      tags: ["TypeScript", "Programming"],
      username: "type_master",
      answerCount: 1,
      upvotes: 3,
      timeAgo: "2h ago",
      description: "I'm struggling to understand how to use generics in TypeScript effectively. Can someone explain with practical examples?"
    },
    {
      _id: "css-grid-flexbox",
      title: "CSS Grid vs Flexbox",
      tags: ["CSS", "Layout"],
      username: "design_pro",
      answerCount: 4,
      upvotes: 6,
      timeAgo: "3h ago",
      description: "When should I use CSS Grid vs Flexbox? What are the key differences and use cases for each?"
    },
  ];

  return (
    <>
      <section>
        <div className="flex items-center justify-between mb-4 mt-8 ">
          <h2 className="text-xl font-semibold">Latest Doubts</h2>
          <Select.Root defaultValue="all" radius="large" size="3">
            <Select.Trigger placeholder="Filter by"/>
            <Select.Content color="blue" >
              <Select.Item value="all">All Doubts</Select.Item>
              <Select.Item value="unanswered">Unanswered</Select.Item>
              <Select.Item value="most-upvoted">Most Upvoted</Select.Item>
              {/* <Select.Separator /> */}
            </Select.Content>
          </Select.Root>
        </div>
        <div className="grid gap-4">
          {latestDoubts.map((doubt) => (
            <DoubtCard 
              key={doubt.title} 
              {...doubt} 
              onClick={() => handleDoubtClick(doubt)}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default LatestDoubts;
