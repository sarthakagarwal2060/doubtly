import React from "react";

function WelcomeSec({userDetails}) {
  return (
    <>
      <div className="space-y-2 dark:bg-[#121212]">
        <h4 className="text-sm font-semibold text-textSecondary">
          Welcome back
        </h4>
        <h1 className="text-3xl font-bold tracking-tight">Hello, {localStorage.getItem("firstName")}</h1>
        <p className="text-textSecondary">
          Keep solving doubts and earn points!
        </p>
      </div>
    </>
  );
}

export default WelcomeSec;
