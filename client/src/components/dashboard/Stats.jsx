import { Award, MessageCircle, ThumbsUp } from "lucide-react"
import { Card} from "@radix-ui/themes";

function Stats({userDetails}) {
  return (
    <>
      <div className="grid gap-4 grid-cols-3 ">
        <Card className="backdrop-blur-sm bg-white/30 border-borderColor shadow-sm dark:bg-[#1C1C1E]">
          <div className="flex flex-row items-center justify-between space-y-0 p-3 pb-2 ">
            <span className="text-sm font-medium">Doubts Solved</span>
            <MessageCircle className="h-4 w-4 " />
          </div>
          <div className="p-3 pt-0">
            <div className="text-2xl font-bold">{userDetails.correctlyAnswered}</div>
            <p className="text-xs text-textSecondary">+{userDetails.correctlyAnsweredLastweek} from last week</p>
          </div>
        </Card>
        <Card className="backdrop-blur-sm bg-white/30 border-borderColor shadow-sm dark:bg-[#1C1C1E]">
          <div className="flex flex-row items-center justify-between space-y-0 p-3 pb-2">
            <span className="text-sm font-medium">Points Earned</span>
            <Award className="h-4 w-4 " />
          </div>
          <div className="p-3 pt-0">
            <div className="text-2xl font-bold">{userDetails.points}</div>
            <p className="text-xs text-textSecondary">+{userDetails.points} from last week</p>
          </div>
        </Card>
        <Card className="backdrop-blur-sm bg-white/30 border-borderColor shadow-sm dark:bg-[#1C1C1E]">
          <div className="flex flex-row items-center justify-between space-y-0 p-3 pb-2">
            <span className="text-sm font-medium">Upvotes</span>
            <ThumbsUp className="h-4 w-4 " />
          </div>
          <div className="p-3 pt-0">
            <div className="text-2xl font-bold">{userDetails.upvotes}</div>
            <p className="text-xs text-textSecondary">+{userDetails.upvoteLastWeek} from last week</p>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Stats;
