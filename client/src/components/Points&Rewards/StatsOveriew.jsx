import React from 'react'
import { Card } from '@radix-ui/themes'
import { Star, MessageCircle, Trophy } from 'lucide-react'
import fetchUserDetails from '../../hooks/fetchUserDetails'
const StatsOveriew = ({userDetails}) => {
console.log(userDetails)
 
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  
      <Card  className="p-4 bg-white dark:bg-[#252525] border-0">
        <div className="flex justify-between items-start">
          <div><Star size={40} className="text-amber-400" /></div>
        </div>
        <h2 className="text-black dark:text-white mt-3">
         Total Points
        </h2>
        <p className="text-2xl font-bold text-black dark:text-white mt-1">
        {userDetails.points}
        </p>
      </Card>

      <Card  className="p-4 bg-white dark:bg-[#252525] border-0">
        <div className="flex justify-between items-start">
          <div><MessageCircle size={40} className="text-blue-400" /></div>
        </div>
        <h2 className="text-black dark:text-white mt-3">
           Doubts Solved
        </h2>
        <p className="text-2xl font-bold text-black dark:text-white mt-1">
        {userDetails.answersGiven}
        </p>
      </Card>


      <Card  className="p-4 bg-white dark:bg-[#252525] border-0">
        <div className="flex justify-between items-start">
          <div><Trophy size={40} className="text-purple-400" /></div>
        </div>
        <h2 className="text-black dark:text-white mt-3">
        Leaderboard Rank
        </h2>
        <p className="text-2xl font-bold text-black dark:text-white mt-1">
        {userDetails.rank}
        </p>
      </Card>
   
  </div>
  </>
  )
}

export default StatsOveriew
