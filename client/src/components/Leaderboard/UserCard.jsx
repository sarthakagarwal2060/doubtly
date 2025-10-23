import React from 'react'
import { Card, Text, Button, Box, Flex, Avatar, Separator, TextArea } from '@radix-ui/themes';

const UserCard = ({ user, className }) => {
    const getRankIcon = (rank) => {
        if (rank === 1) return <span className="text-yellow-400">🏆</span>;
        if (rank === 2) return <span className="text-gray-400">🥈</span>;
        if (rank === 3) return <span className="text-amber-600">🥉</span>;
        return rank;
    };

  return (
    <div className={`p-5 rounded-xl border border-indigo-100 flex flex-col items-center  dark:border-gray-500  ${className}`}>
    <div className="relative mb-2.5">
        <img 
            src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random&size=100`}
            alt={`${user.name}'s avatar`}
            className="w-[100px] h-[100px] rounded-full object-cover border-3 border-purple-100"
        />
        <div className="absolute top-0 right-0 bg-white rounded-full p-1.5 shadow-sm">
            {getRankIcon(user.rank)}
        </div>
    </div>

    <Text size="5" weight="bold" className="mb-1.5">{user.name}</Text>
    <Flex align="center" className="text-purple-600 mb-4">
        <Text size="3" className="mr-1.5">★</Text>
        <Text size="3">{user.points} points</Text>
    </Flex>

    <div className="text-center w-full">
        <Text size="5" weight="bold">{user.correctlyAnswered}</Text>
        <Text size="2" className="text-gray-600 dark:text-white"> Correctly Answered</Text>
    </div>
</div>
  )
}

export default UserCard

