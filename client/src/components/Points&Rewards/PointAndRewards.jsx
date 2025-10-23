import React from 'react'
import StatsOveriew from './StatsOveriew'
import UserContribution from './UserContribution'
import PointsInfo from './PointsInfo'
import fetchUserDetails from '../../hooks/fetchUserDetails'
import Loader from '../Loader'
const PointAndRewards = () => {
    const {userDetails,loading} = fetchUserDetails();
    if (loading) {
        return <div><Loader /></div>;
      }

  return (
    <main className="pt-16 pl-72 pr-8">
      
        <div className="container py-6 space-y-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-black  dark:text-white">
              Points & Rewards 
            </h1>
          </div>

       
          <StatsOveriew  userDetails={userDetails} />

         
          <div className="flex justify-between">
            <div className="w-[70%]">
              <UserContribution userDetails={userDetails}/>
            </div>

            <div className="w-[27.5%]">
            <PointsInfo />
            </div>


          </div>
        </div>
      </main>
  )
}

export default PointAndRewards
