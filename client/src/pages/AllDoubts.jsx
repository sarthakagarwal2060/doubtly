import React from "react";
import Doubts from "../components/AllDoubts/Doubts";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

function AllDoubts() {
  
  return (
    <>
      <NavBar doubtly={true} searchBar={true} notification={true} profile={true}/>
      <SideBar />
      <Doubts />
    </>
  );
}

export default AllDoubts;
