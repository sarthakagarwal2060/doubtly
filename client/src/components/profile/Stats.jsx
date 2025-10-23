import React from "react";
import { Card, Tabs, Text } from "@radix-ui/themes";
import { Loader } from "lucide-react";

function Stats({userDetails}) {
  return (
    <>
      <Card>
        <div className="py-6 px-6">
          <div className="flex flex-col">
            <h2 className="font-semibold text-xl">Your Stats</h2>
            <Text className="text-xs text-gray-700 dark:text-gray-300">How you've been contibuting</Text>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-8 mt-6">
            <Card>
                <h2 className="text-sm">Doubts Posted</h2>
                <Text className="text-2xl font-bold">{userDetails?.doubtAsked}</Text>
            </Card>
            <Card>
                <h2 className="text-sm">Answers Given</h2>
                <Text className="text-2xl font-bold">{userDetails.answersGiven}</Text>
            </Card>
            <Card>
                <h2 className="text-sm">Total Points</h2>
                <Text className="text-2xl font-bold">{userDetails.points}</Text>
            </Card>
            <Card>
                <h2 className="text-sm">Acceptance Rates</h2>
                <Text className="text-2xl font-bold">{userDetails?.acceptance ?? 0}%</Text>
            </Card>
          </div>
        </div>
      </Card>
    </>
  );
}

export default Stats;
