import React from 'react'
import { Card } from '@radix-ui/themes'
import { CheckCircle, ThumbsUp } from 'lucide-react'
import fetchUserDetails from '../../hooks/fetchUserDetails'
const UserContribution = ({userDetails}) => {
 
  
    
  return (
     <div className="p-4 bg-white dark:bg-[#1A1A1A] rounded-lg border-0">
    <h2 className="text-lg font-semibold text-black  dark:text-white mb-4">Your Contributions</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
     
        <Card  className="p-4 bg-white dark:bg-[#252525] border-0">
          <div><CheckCircle size={40} className="text-emerald-400" /></div>
          <h3 className="text-gray-600 dark:text-gray-400 mt-3">
            Verified Answers
          </h3>
          <p className="text-2xl font-bold text-black dark:text-white mt-1">
             { userDetails.correctlyAnswered}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          {userDetails.correctlyAnswered*50} points earned
          </p>
        </Card>

          <Card  className="p-4 bg-white dark:bg-[#252525] border-0">
          <div><ThumbsUp size={40} className="text-sky-400" /></div>
          <h3 className="text-gray-600 dark:text-gray-400 mt-3">
             Total Upvotes
          </h3>
          <p className="text-2xl font-bold text-black dark:text-white mt-1">
           {userDetails.upvotes} 
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {userDetails.upvotes} points earned
          </p>
        </Card>
     
    </div>
  </div>
  )
}

export default UserContribution
