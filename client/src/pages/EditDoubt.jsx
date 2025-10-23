import React, { useRef, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, Text, Button, Box } from "@radix-ui/themes";
import { toast } from "react-toastify";
import axios from "axios";
import Dashboard from "./Dashboard";
import HeadingOfSection from "../components/postdoubt/headingofsection";
import Category from "../components/postdoubt/Category";

function EditDoubt() {
  const navigate = useNavigate();
  const { doubtId } = useParams();
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const categoryRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchDoubtDetails();
  }, []);

  const fetchDoubtDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://doubtly-backend.onrender.com/api/doubt/show/id/${doubtId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      
      if (response.data.result) {
        const doubt = response.data.result;
        titleRef.current.value = doubt.title;
        descriptionRef.current.value = doubt.description;
        
        if (doubt.tags && doubt.tags.length > 0) {
          console.log(doubt.tags[0])
          setSelectedCategory(doubt.tags[0]);
        }
      }
    } catch (error) {
      toast.error("Failed to load doubt details");
      navigate("/dashboard/mydoubts");
    }
  };

  const handleSubmit = async () => {
    if (!titleRef.current?.value?.trim()) {
      toast.error("Please enter a doubt title");
      return;
    }
    if (!descriptionRef.current?.value?.trim()) {
      toast.error("Please enter a description");
      return;
    }
    if (!categoryRef.current?.value || categoryRef.current.value === "0") {
      toast.error("Please select a category");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `https://doubtly-backend.onrender.com/api/doubt/modify/${doubtId}`,
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

      if (response.status === 200) {
        toast.success("Doubt updated successfully!");
         navigate(-1);

      }
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Session expired. Please login again.");
        navigate("/login");
      } else {
        toast.error("Failed to update doubt");
         navigate(-1);
      }
    }
  };

  const handleClose = () => {
    navigate("/dashboard/mydoubts");
  };

  return (
    <>
      <div className="fixed inset-0 filter blur-sm">
        <Dashboard />
      </div>
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-4xl px-4">
          <Card className="w-full bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl dark:bg-[#1C1C1E]">
            <div className="flex justify-between items-center mb-4">
              <Text size="6" weight="bold">
                Edit Doubt
              </Text>
              <Button
                variant="ghost"
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </Button>
            </div>

            <HeadingOfSection
              name="Doubt Title"
              placeholder="Summarize your doubt in one line"
              ref={titleRef}
            />

            <HeadingOfSection
              name="Description"
              placeholder="Provide detailed context, what you've tried, and where you're stuck"
              isLarge={true}
              ref={descriptionRef}
            />

            <Box className="mb-6">
              <Category
                ref={categoryRef}
                defaultValue={selectedCategory}
              />
            </Box>

            <Box className="flex justify-end gap-3">
              <Button size="3" variant="soft" onClick={handleClose}>
                Cancel
              </Button>
              <Button size="3" color="blue" onClick={handleSubmit}>
                Update Doubt
              </Button>
            </Box>
          </Card>
        </div>
      </div>
    </>
  );
}

export default EditDoubt; 