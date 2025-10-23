import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Doubts from "../components/myDoubts/Doubts";

function MyDoubts() {
  
  return (
    <>
      <NavBar doubtly={true} searchBar={true} notification={true} profile={true} />
      <SideBar />
      <Doubts />
      
    </>
  );
}

export default MyDoubts;
