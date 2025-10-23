import { Card, Avatar } from "@radix-ui/themes";
import useLeaderboard from "../../hooks/useLeaderboard";
import Loader from "../Loader";

function LeaderBoard() {
  const { leaderboardData, loading, error } = useLeaderboard();
  
  const topUsers = loading ? [] : leaderboardData.slice(0, 3);

  return (
    <>
      <Card className="backdrop-blur-sm bg-white/30 border-borderColor shadow-sm dark:bg-[#1C1C1E]">
        <div className="p-3 pb-6">
          <span className="text-xl font-semibold ">Top Contributors</span>
        </div>

        {loading ? (

          <div className="p-3 pt-32 text-center">

            <Loader />
          </div>
        ) : error ? (
          <div className="p-3 pt-0 text-center text-red-500 text-sm">
            Failed to load leaderboard
          </div>
        ) : (
          <div className="space-y-4 p-3 pt-0">
            {topUsers.map((user, index) => (
              <div key={user.id || user.name} className="flex items-center gap-4">
                <div className="relative">
                  <Avatar 
                    src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=random`} 
                    fallback={user.name[0]} 
                    color="blue"
                  />
                  <div className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="truncate text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-textSecondary">
                    {user.points} points
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </>
  );
}

export default LeaderBoard;
