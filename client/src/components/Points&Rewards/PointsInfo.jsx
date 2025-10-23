import React from 'react'
import { Card } from '@radix-ui/themes';    
import { CheckCircle, ThumbsUp } from 'lucide-react'    

const PointsInfo = () => {
     


  return (
    <Card className="p-4 bg-white dark:bg-[#252525] border-0">
    <h2 className="text-lg font-semibold text-black dark:text-white mb-4">How to Earn Points</h2>
    <div className="space-y-4">
   
        <div 
        
          className="flex items-start gap-3 border-b border-gray-200 dark:border-[#333333] pb-4 last:border-0 last:pb-0"
        >
          <div className="flex-shrink-0 mt-1">
          <CheckCircle size={24} className="text-emerald-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-medium text-black dark:text-white mb-1">
              Verified Answers
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Earn 50 points for each answer that gets verified
            </p>
          </div>
        </div>

          <div 
     
          className="flex items-start gap-3 border-b border-gray-200 dark:border-[#333333] pb-4 last:border-0 last:pb-0"
        >
          <div className="flex-shrink-0 mt-1">
          <ThumbsUp size={24} className="text-sky-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-base font-medium text-black dark:text-white mb-1">
              Upvotes
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Earn 1 point for each upvote on your answers
            </p>
          </div>
        </div>
    
    </div>
  </Card>
  )
}

export default PointsInfo
