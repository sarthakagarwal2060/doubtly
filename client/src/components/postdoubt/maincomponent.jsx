import HeadingOfSection from "./headingofsection";
import Category from "./Category";
import { Button, Card, Text, Box } from "@radix-ui/themes";
import { handleSubmit } from "../../pages/PostDoubt";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

export default function MainComponent({
  titleRef,
  descriptionRef,
  categoryRef,
}) {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleClick = async () => {
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

    setIsSubmitting(true);
    try {
      const response = await handleSubmit(titleRef, descriptionRef, categoryRef);
      console.log("Form submission response:", response);
      
      if (response?.status === 200) {
        toast.success("Doubt posted successfully!");
        navigate(-1);
      } else {
        toast.error("Failed to post doubt. Please try again.");
      }
       navigate(-1);
    } catch (error) {
      console.error("Error in form submission:", error);
      if (error.response?.status === 401) {
        toast.error("Session expired. Please login again.");
        navigate("/login");
      } else {
        toast.error(error.response?.data?.message || "Failed to post doubt. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    navigate("/dashboard");
  };

  return (
    <Card className="w-full bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl dark:bg-[#1C1C1E]">
      <div className="flex justify-between items-center mb-4">
        <Text size="6" weight="bold">Post a Doubt</Text>
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
        <Category ref={categoryRef} defaultValue="0"/>
      </Box>

      <Box className="flex justify-end gap-3">
        <Button 
          size="3" 
          variant="soft"
          onClick={handleClose}
          disabled={isSubmitting}
        >
          Cancel
        </Button>
        <Button 
          size="3" 
          color="blue"
          onClick={handleClick}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Posting..." : "Post Doubt"}
        </Button>
      </Box>
    </Card>
  );
}
