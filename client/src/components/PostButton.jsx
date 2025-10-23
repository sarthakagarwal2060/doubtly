import React from "react";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PostButton() {
  const navigate = useNavigate();

  return (
    <button className="fixed bottom-10 right-8 z-50 bg-[#0090ff] hover:bg-blue-550 text-white p-4 rounded-full shadow-lg hover:scale-110 cursor-pointer"
      onClick={() => navigate("/dashboard/postdoubt")}
    >
      <Plus size={28} />
    </button>
  );
}

export default PostButton;
