import React from 'react';
import { Text, Flex } from "@radix-ui/themes";
import UserCard from './UserCard';

export default function TopPerformer({ leaderboardData }) {
    const topUsers = leaderboardData.slice(0, 3);
    const topUsersWithRank = topUsers.map((user, index) => ({
        ...user,
        rank: index + 1
    }));

    return (
        <div className="max-w-[1200px] mx-auto p-5">
            <div className="text-center mb-10">
                <Text size="8" weight="bold" className="text-gray-800 dark:text-white">Leaderboard</Text>
            </div>

            <Flex gap="6" justify="center" align="end" wrap="wrap" className="mb-10">
                {topUsersWithRank.filter(user => user.rank === 2).map(user => (
                    <UserCard key={user.id || user.name} user={user} className="w-[250px] md:w-[280px] bg-gray-200 dark:bg-[#222427] shadow-md" />
                ))}

                {topUsersWithRank.filter(user => user.rank === 1).map(user => (
                    <UserCard key={user.id || user.name} user={user} className="w-[300px] md:w-[320px]  bg-gray-200 dark:bg-[#222427] shadow-lg scale-110" />
                ))}

                {topUsersWithRank.filter(user => user.rank === 3).map(user => (
                    <UserCard key={user.id || user.name} user={user} className="w-[250px] md:w-[280px] bg-gray-200 dark:bg-[#222427] shadow-md" />
                ))}
            </Flex>
        </div>
    );
}