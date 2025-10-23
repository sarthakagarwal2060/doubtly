import MainComponent from "../components/postdoubt/maincomponent";
import axios from "axios";
import { useRef } from "react";
import Dashboard from "./Dashboard";
export const handleSubmit = async (titleRef, descriptionRef, categoryRef) => {
  try {
    const token = localStorage.getItem("token");
    const res = await axios.post(
      "https://doubtly-backend.onrender.com/api/doubt/add",
      {
        heading: titleRef.current.value,
        description: descriptionRef.current.value,
        type: categoryRef.current.value,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      }
    );

    if (res.status === 200 && res.data) {
      console.log("Doubt posted successfully:", res.data);
      return res;
    } else {
      throw new Error("Invalid response from server");
    }
  } catch (e) {
    console.error("Error posting doubt:", e);
    return null;
  }
};

export default function PostDoubt() {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);

  return (
    <>
      <div className="fixed inset-0 filter blur-sm">
        <Dashboard />
      </div>
      <div className="fixed inset-0 flex items-center justify-center z-10 ">
        <div className="w-full max-w-4xl px-4">
          <MainComponent
            titleRef={titleRef}
            descriptionRef={descriptionRef}
            categoryRef={categoryRef}
         />
        </div>
      </div>
    </>
  );
}
