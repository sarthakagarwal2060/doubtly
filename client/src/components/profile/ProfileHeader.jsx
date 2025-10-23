import React from "react";
import { User } from "lucide-react";

function ProfileHeader() {
  return (
    <>
      <div className="space-y-2 flex items-center gap-2">
        <User size={36} className="text-black dark:text-white"/>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
      </div>
    </>
  );
}

export default ProfileHeader;
