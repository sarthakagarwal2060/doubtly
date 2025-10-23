import { Button } from '@radix-ui/themes'
import React, { useState } from 'react'

function Section3() {
    const [emailId, setEmailId] = useState("");
    // console.log(emailId);
  return (
    <>
      <section className="py-16 flex items-center justify-center bg-blue-50">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-2xl space-y-4 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight">Ready to Join Doubtly?</h2>
            <p className="text-muted-foreground md:text-xl">
              Start asking questions, helping others, and growing your skills today.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-[360px] px-2 py-2 rounded-lg"
                onChange={(e) => setEmailId(e.target.value)}
              />
              <Button size="3" color='blue'>Sign Up</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section3