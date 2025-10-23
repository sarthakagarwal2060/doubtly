import "@radix-ui/themes/styles.css";
import { Card, Box, Text, Flex, Table, Badge } from "@radix-ui/themes";

export default function CompleteLeaderBoard({ leaderboardData }) {
    const getRankIcon = (rank) => {
        if (rank === 1) return <span className="text-yellow-400">🏆</span>;
        if (rank === 2) return <span className="text-gray-400">🥈</span>;
        if (rank === 3) return <span className="text-amber-600">🥉</span>;
        return rank;
    };

    return (
        <div className="max-w-[1200px] mx-auto p-5">
            <div className="p-5 rounded-xl border border-indigo-100 bg-gray-100 shadow-sm dark:bg-[#222427] dark:text-black dark:border-gray-500">
                <Table.Root>
                    <Table.Header>
                        <Table.Row>
                            <Table.ColumnHeaderCell className="text-center w-[10%]">Rank</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell className="w-[40%]">User</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell className="text-center w-[25%]">Correctly Answered</Table.ColumnHeaderCell>
                            <Table.ColumnHeaderCell className="text-center w-[25%]">Points</Table.ColumnHeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {leaderboardData.map((user, index) => (
                            <Table.Row key={user.id || index}>
                                <Table.Cell className="text-center">
                                    <Flex align="center" justify="center">
                                        {getRankIcon(index + 1)}
                                    </Flex>
                                </Table.Cell>
                                <Table.Cell>
                                    <Flex align="center" gap="2">
                                        <img 
                                            src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`}
                                            alt={`${user.name}'s avatar`}
                                            className="w-[30px] h-[30px] rounded-full object-cover border border-gray-200 "
                                        />
                                        <Text>{user.name}</Text>
                                    </Flex>
                                </Table.Cell>
                                <Table.Cell className="text-center">
                                    {user.correctlyAnswered}
                                </Table.Cell>
                                <Table.Cell className="text-center">
                                    <Flex justify="center">
                                        <Badge size="1" className="bg-purple-100 text-purple-600 rounded-xl px-2.5 py-0.5">
                                            {user.points}
                                        </Badge>
                                    </Flex>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </div>
        </div>
    );
}