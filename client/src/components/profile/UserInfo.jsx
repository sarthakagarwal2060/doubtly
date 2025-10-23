import React from 'react'
import { Mail, Calendar } from 'lucide-react';
import { Avatar, Card, Text, Separator, Button } from '@radix-ui/themes'
import  parseDateString  from '../../utils/parseDateString';
function UserInfo({userDetails}) {
  return (
    <>
      <Card >
        <div className='flex flex-col items-center justify-center py-6 px-12'>

          <div className='p-5'>
            <Avatar src={userDetails.image} fallback={(localStorage.getItem("fullName"))?.charAt(0)} color="blue" size="6" radius='large'></Avatar>
          </div>
          <h1 className='font-bold text-2xl'>{localStorage.getItem("fullName")}</h1>

          {/* <div className='flex gap-4 mt-4'>
            <Button color='gray' size="3">XXXX</Button>
            <Button color='gray' size="3">XXXX</Button>
          </div> */}

          <Separator size="4" className='m-8'/>

          <div className="w-full space-y-4">
            <div className="flex items-center gap-2">
              <Mail className="text-gray-900 h-4 w-4 dark:text-white" />
              <span className="text-sm">{localStorage.getItem("email")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="text-gray-900 h-4 w-4 dark:text-white" />
              <span className="text-sm">Joined {parseDateString(localStorage.getItem("joinedDate"))}</span>
            </div>
          </div>

          <Separator size="4" className='m-8'/>

          {/* <div className="flex gap-8 w-full text-center">
            <div>
              <p className="text-xl font-bold">{userDetails.doubtAsked}</p>
              <Text className="text-xs text-gray-900">Doubts</Text>
            </div>
            <div>
              <p className="text-xl font-bold">{userDetails.answersGiven}</p>
              <Text className="text-xs text-gray-900">Answers</Text>
            </div>
            <div>
              <p className="text-xl font-bold">{userDetails.points}</p>
              <Text className="text-xs text-gray-900">Points</Text>
            </div>
          </div>     */}
        </div>
      </Card>
    </>
  )
}

export default UserInfo