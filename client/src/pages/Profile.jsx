import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import ProfileHeader from "../components/profile/ProfileHeader";
import UserInfo from "../components/profile/UserInfo";
import Stats from "../components/profile/Stats";
import Tab from "../components/profile/Tab";
import fetchUserDetails from "../hooks/fetchUserDetails";
import { Card } from "@radix-ui/themes";
import Loader from "../components/Loader";

function Profile() {
  const { userDetails, loading } = fetchUserDetails(); 

  console.log(userDetails);
  
  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <>
      <NavBar doubtly={false} searchBar={true} notification={true} profile={true} />
      <SideBar />
      <main className="pt-16 pl-72 pr-8 bg-primary">
        <div className="container py-6 space-y-8 ">
          <div>
            <ProfileHeader />
          </div>
          <div className="flex items-center justify-center">
            <Card>
              <div className="p-10">
                <div className="flex gap-20">
                  <UserInfo userDetails={userDetails} />
                  <div className="flex flex-col gap-10">
                    <Tab />
                    <Stats userDetails={userDetails} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
}

export default Profile;
