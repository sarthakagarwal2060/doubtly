import { Card } from "@radix-ui/themes";
import React from "react";
import Mehul from "../../assets/Team/mehul.png";
import Sarthak from "../../assets/Team/sarthak.png";
import Narendra from "../../assets/Team/narendra.jpg";
import Apurv from "../../assets/Team/apurv.jpg";
import Default from "../../assets/Team/default.jpg";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Linkedin, Github } from "lucide-react";

function Team() {
  const teamMembers = [
    {
      name: "Mehul Agarwal",
      role: "Developer",
      lnkdn: "https://www.linkedin.com/in/mehul-agarwal-4a8887256/",
      github: "https://github.com/Mehul01-Max",
      image: Mehul,
    },
    {
      name: "Apurv Dugar",
      role: "Developer",
      lnkdn: "https://www.linkedin.com/in/apurv-dugar-816934274/",
      github: "https://github.com/apurvdugar",
      image: Apurv,
    },
    {
      name: "Sarthak Agarwal",
      role: "Developer",
      lnkdn: "https://www.linkedin.com/in/sarthak-agarwal-243a50303/",
      github: "https://github.com/sarthakagarwal2060",
      image: Sarthak,
    },
    {
      name: "Narendra Sirvi",
      role: "Developer",
      lnkdn: "https://www.linkedin.com/in/narendra-sirvi-4b694a188/",
      github: "https://github.com/Naren456",
      image: Narendra,
    },
  ];

  return (
    <>
      <div className="dark:text-black dark:bg-white">
        <NavBar doubtly={true} login={true} />

        <div className="py-20 md:py-20 flex flex-col items-center justify-center bg-[#F7F9FA]">
          <h1 className="text-5xl font-bold text-center mb-4">Meet Our Team</h1>
          <div className="py-20 md:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <Card
                  key={member.name}
                  className="transform hover:scale-105 transition-all duration-300"
                >
                  <div className="flex flex-col items-center p-8 gap-4 rounded-xl bg-white border-0">
                    <div className="mb-6">
                      <img
                        src={member.image || fallbackImage}
                        alt={member.name}
                        className="w-60 h-60 rounded-full object-cover shadow-lg border-4 border-white"
                      />
                    </div>
                    <div className="text-center">
                      <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                        {member.name}
                      </h2>
                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                        {member.role}
                      </p>
                      <div className="flex justify-center gap-6 mt-8">
                        <div className="flex items-center justify-center gap-1">
                          <Github size="18" />
                          <button className="bg-[#]">
                            <Link to={member.github} target="blank">
                              GitHub
                            </Link>
                          </button>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                          <Linkedin size="18" />
                          <button className="bg-[#]">
                            <Link to={member.lnkdn} target="blank">
                              Linkedin
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
