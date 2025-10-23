import React from 'react';

import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import UserContribution from '../components/Points&Rewards/UserContribution';
import StatsOveriew from '../components/Points&Rewards/StatsOveriew';
import PointsInfo from '../components/Points&Rewards/PointsInfo';
import fetchUserDetails from '../hooks/fetchUserDetails';
import PointAndRewards from '../components/Points&Rewards/PointAndRewards';
const Points = () => {


   
  return (
    <div>

      <NavBar doubtly={true} searchBar={true} notification={true} profile={true} />
      <SideBar/>
       <PointAndRewards />

     
    </div>
  );
};

export default Points;
