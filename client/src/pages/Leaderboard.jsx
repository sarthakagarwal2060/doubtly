import React from 'react'
import CompleteLeaderBoard from '../components/Leaderboard/CompleteLeaderBoard'
import TopPerformer from '../components/Leaderboard/TopPerformer'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import useLeaderboard from '../hooks/useLeaderboard'
import Loader from '../components/Loader'

export default function Leaderboard() {
  const { error, loading, leaderboardData } = useLeaderboard();

  if (loading || !leaderboardData) {
    return (
      <div className="flex flex-col min-h-screen bg-primary">
        <NavBar doubtly={false} searchBar={true} notification={true} profile={true} />
        <div className="flex flex-row flex-grow">
          <SideBar className="w-1/4" />
          <div className="container mx-auto pt-24 pb-10 px-4 flex-grow md:pl-[12rem]">
            <Loader />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-primary">
      <NavBar doubtly={true} searchBar={true} notification={true} profile={true}/>
      <div className="flex flex-row flex-grow">
        <SideBar className="w-1/4" />
        <div className="container mx-auto pt-24 pb-10 px-4 flex-grow md:pl-[12rem]">
          {error && (
            <div className="w-full p-4 mb-6 bg-red-100 border border-red-400 text-red-700 rounded">
              Error loading leaderboard: {error}
            </div>
          )}
          <TopPerformer leaderboardData={leaderboardData} />
          <CompleteLeaderBoard leaderboardData={leaderboardData} />
        </div>
      </div>
    </div>
  )
}
