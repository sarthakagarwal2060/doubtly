import React, { useState, useRef, useEffect } from 'react';
import { Card, Text, Button, Box, Flex, Avatar, Separator, TextArea, Dialog } from '@radix-ui/themes';
import { ThumbsUp, MessageCircle, Clock, X, Edit2, Trash2 } from 'lucide-react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Dashboard from '../../pages/Dashboard';
import Loader from '../Loader';

function SolutionModal({ doubt, onClose }) {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleting, setDeleting] = useState(null);
  const [editText, setEditText] = useState('');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [solutionToDelete, setSolutionToDelete] = useState(null);
  const solutionRef = useRef(null);

  useEffect(() => {
    fetchSolutions();
  }, [doubt]);

  const isWithinEditWindow = (solution) => {
    if (!solution || !solution.date) return false;
    const creationTime = new Date(solution.date).getTime();
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - creationTime;
    const fiveMinutesInMs = 5 * 60 * 1000;
    return timeDifference <= fiveMinutesInMs;
  };

  const fetchSolutions = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `https://doubtly-backend.onrender.com/api/solution/show/${doubt._id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      setSolutions(response.data.result || []);
    } catch (error) {
      console.error("Error fetching solutions:", error);
      toast.error("Failed to load solutions");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitSolution = async () => {
    if (!solutionRef.current?.value?.trim()) {
      toast.error("Please enter a solution");
      return;
    }

    setSubmitting(true);
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        `https://doubtly-backend.onrender.com/api/solution/add/${doubt._id}`,
        {
          description: solutionRef.current.value,
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
        toast.success("Solution posted successfully!");
        solutionRef.current.value = "";
        fetchSolutions();
      }
    } catch (error) {
      console.error("Error posting solution:", error);
      toast.error("Failed to post solution");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEditSolution = (solution) => {
    if (!isWithinEditWindow(solution)) {
      toast.error("You can only edit solutions within 5 minutes of posting");
      return;
    }
    setEditing(solution.id);
    setEditText(solution.description);
  };

  const handleCancelEdit = () => {
    setEditing(null);
    setEditText('');
  };

  const handleUpdateSolution = async (solutionId) => {
    if (!editText.trim()) {
      toast.error("Solution cannot be empty");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        `https://doubtly-backend.onrender.com/api/solution/update/${solutionId}`,
        { 
          description: editText
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
        toast.success("Solution updated successfully!");
        setEditing(null);
        setEditText('');
        fetchSolutions();
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        toast.error("Time limit of 5min exceeded");
      } else {
        toast.error("Failed to update solution");
      }
    }
  };

  const handleDeleteClick = (solution) => {
    if (!isWithinEditWindow(solution)) {
      toast.error("You can only delete solutions within 5 minutes of posting");
      return;
    }
    setSolutionToDelete(solution);
    setShowDeleteConfirm(true);
  };

  const handleDeleteSolution = async () => {
    if (!solutionToDelete) return;
    
    setDeleting(solutionToDelete.id);
    
    try {
      const token = localStorage.getItem("token");
      const response = await axios.delete(
        `https://doubtly-backend.onrender.com/api/solution/delete/${solutionToDelete.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        toast.success("Solution deleted successfully!");
        setSolutions(prev => prev.filter(s => s.id !== solutionToDelete.id));
      }
    } catch (error) {
      if (error.response && error.response.status === 403) {
        toast.error("Time limit of 5min exceeded");
      } else {
        toast.error("Failed to delete solution");
      }
    } finally {
      setDeleting(null);
      setShowDeleteConfirm(false);
      setSolutionToDelete(null);
    }
  };

  return (
    <>
      <div className="fixed inset-0 filter blur-sm">
        <Dashboard />
      </div>
      <div className="fixed inset-0 flex items-center justify-center z-10">
        <div className="w-full max-w-4xl px-4">
          <Card className="w-full bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-xl max-h-[90vh] overflow-y-auto">
            <Flex justify="between" align="center" mb="4">
              <Text size="6" weight="bold">Solutions</Text>
              <Button 
                variant="ghost" 
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={18} />
              </Button>
            </Flex>

            <Card className="mb-6 p-4 bg-gray-50">
              <Flex gap="2" direction="column">
                <Text size="5" weight="bold">{doubt.title}</Text>
                <Text size="2" color="gray">Posted by {doubt.username}</Text>
                <Text size="3">{doubt.description}</Text>
                <Flex gap="4" className="text-sm text-gray-500 mt-2">
                  <Flex align="center" gap="1">
                    <MessageCircle size={16} /> {doubt.answerCount || 0}
                  </Flex>
                  <Flex align="center" gap="1">
                    <ThumbsUp size={16} /> {doubt.upvotes || 0}
                  </Flex>
                  <Flex align="center" gap="1">
                    <Clock size={16} /> {doubt.timeAgo || 'Recently'}
                  </Flex>
                </Flex>
              </Flex>
            </Card>

            <Separator size="4" mb="4" />

            <Box className="mb-6">
              <Text size="4" weight="bold" mb="3">All Solutions</Text>
              
              {loading ? (
                <Text size="2" color="gray"><Loader /></Text>
              ) : solutions.length === 0 ? (
                <Text size="2" color="gray">No solutions yet. Be the first to help!</Text>
              ) : (
                <Flex direction="column" gap="3">
                  {solutions.map((solution, index) => (
                    <Card key={index} className="p-4 bg-gray-50">
                      <Flex gap="3" direction="column">
                        <Flex align="center" gap="2">
                          <Avatar 
                            size="2" 
                            src={solution.user?.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(solution.user?.name || 'User')}`} 
                            fallback={solution.user?.name?.[0] || 'U'} 
                          />
                          <Text size="2" weight="bold">{solution.user?.name || 'Anonymous'}</Text>
                          <Text size="1" color="gray">{solution.createdAt ? new Date(solution.createdAt).toLocaleDateString() : 'Recently'}</Text>
                        </Flex>
                        
                        {editing === solution.id ? (
                          <div className="space-y-3">
                            <TextArea 
                              value={editText}
                              onChange={(e) => setEditText(e.target.value)}
                              className="min-h-[100px] w-full resize-none"
                              placeholder="Edit your solution..."
                            />
                            <Flex gap="2" justify="end">
                              <Button 
                                variant="soft" 
                                onClick={handleCancelEdit}
                                disabled={submitting}
                              >
                                Cancel
                              </Button>
                              <Button 
                                color="blue" 
                                onClick={() => handleUpdateSolution(solution.id)}
                                disabled={submitting}
                              >
                                {submitting ? "Updating..." : "Update"}
                              </Button>
                            </Flex>
                          </div>
                        ) : (
                          <Text size="2">{solution.description}</Text>
                        )}
                        
                        <Flex align="center" gap="2">
                          <Button variant="ghost" size="1">
                            <ThumbsUp size={14} />
                            <Text size="1">{solution.upvotes || 0}</Text>
                          </Button>
                          
                          {/* Only show edit/delete buttons if the solution belongs to the current user */}
                          {solution.isUserSol && (
                            <>
                              <Button 
                                variant="ghost" 
                                size="1"
                                onClick={() => handleEditSolution(solution)}
                                className={`text-gray-500 ${
                                  isWithinEditWindow(solution) 
                                    ? "hover:text-blue-500" 
                                    : "opacity-50 cursor-not-allowed"
                                }`}
                                title={
                                  isWithinEditWindow(solution)
                                    ? "Edit solution"
                                    : "Can only edit within 5 minutes of posting"
                                }
                              >
                                <Edit2 size={14} />
                              </Button>
                              <Button 
                                variant="ghost" 
                                size="1"
                                onClick={() => handleDeleteClick(solution)}
                                className={`text-gray-500 ${
                                  isWithinEditWindow(solution) 
                                    ? "hover:text-red-500" 
                                    : "opacity-50 cursor-not-allowed"
                                }`}
                                title={
                                  isWithinEditWindow(solution)
                                    ? "Delete solution"
                                    : "Can only delete within 5 minutes of posting"
                                }
                              >
                                <Trash2 size={14} />
                              </Button>
                            </>
                          )}
                        </Flex>
                      </Flex>
                    </Card>
                  ))}
                </Flex>
              )}
            </Box>


            <Box>
              <Text size="4" weight="bold" mb="3">Post Your Solution</Text>
              <TextArea 
                placeholder="Share your solution or approach..." 
                ref={solutionRef}
                className="mb-3 min-h-[120px]"
              />
              <Flex justify="end" gap="3">
                <Button 
                  variant="soft" 
                  onClick={onClose}
                  disabled={submitting}
                >
                  Cancel
                </Button>
                <Button 
                  color="blue" 
                  onClick={handleSubmitSolution}
                  disabled={submitting}
                >
                  {submitting ? "Posting..." : "Post Solution"}
                </Button>
              </Flex>
            </Box>
          </Card>
        </div>
      </div>
      
      {/* Delete Confirmation Dialog */}
      <Dialog.Root open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <Dialog.Content size="2">
          <Dialog.Title>Delete Solution</Dialog.Title>
          <Dialog.Description size="2" mb="4">
            Are you sure you want to delete this solution? This action cannot be undone.
          </Dialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft" color="gray">
                Cancel
              </Button>
            </Dialog.Close>
            <Button 
              color="red" 
              onClick={handleDeleteSolution}
              disabled={deleting}
            >
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}

export default SolutionModal; 