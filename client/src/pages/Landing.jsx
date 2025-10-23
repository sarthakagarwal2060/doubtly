import React from "react";
import { Button } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Landing/NavBar";
import Section1 from "../components/Landing/Section1";
import Section2 from "../components/Landing/Section2";
import Section3 from "../components/Landing/Section3";
import Footer from "../components/Landing/Footer";
function Landing() {
  const navigate = useNavigate();
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center min-h-screen gap-2 bg-primary">
        <h2 className="text-4xl font-extrabold">Welcome to Doubtly</h2>
        <span className="text-md font-normal text-textSecondary">
          A community-driven platform to share and resolve your doubts
        </span>
        <div className="mt-3">
            <Button color="blue" size="3" radius="large" onClick={() => navigate("/login")}>
            Post a Doubt
            </Button>
        </div>
      </div>  */}
      <div className="bg-white text-black">
      <NavBar doubtly={true} login={true}/>
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      </div>
    </>
  );
}

export default Landing