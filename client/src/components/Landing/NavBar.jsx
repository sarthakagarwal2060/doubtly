import { Button } from "@radix-ui/themes";
import React from "react";
import { Link } from "react-router-dom";


function NavBar() {
  const isActive = (href) => {
    return location.pathname === href;
  }
  return (
    <>
     <nav className=" bg-white/80 backdrop-blur sticky top-0 z-50 flex items-center justify-center">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 ">
            <span className="font-bold text-3xl">Doubtly</span>
          </div>
          <div className="flex items-center gap-3 border rounded-full px-2 py-1 bg-white/80 backdrop-blur hover:scale-110 transition-all duration-300">
            <Link to="/"><button className={`font-medium py-2 px-4 rounded-full hover:bg-blue-100 ${isActive("/") ? "bg-blue-100" : ""}`}>Home</button></Link>
            <Link to="/about"><button className={`font-medium py-2 px-4 rounded-full hover:bg-blue-100 ${isActive("/about") ? "bg-blue-100" : ""}`}>About</button></Link>
            <Link to="/team"><button className={`font-medium py-2 px-4 rounded-full hover:bg-blue-100 ${isActive("/team") ? "bg-blue-100" : ""}`}>Team</button></Link>
          </div>
          <div className="flex items-center gap-1">
            <Link to="/signup"><Button color="blue" size="3">Get Started</Button></Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
