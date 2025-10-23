import { Button } from '@radix-ui/themes'
import { ArrowRight, MessageSquare, Badge } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import React from 'react'

function Section1() {
  const navigate = useNavigate();
  return (
    <>
      <section className="py-20 md:py-32 flex items-center justify-center bg-[#F7F9FA]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Solve Doubts Together
              </h1>
              <p className="md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#65758B]">
                Join the community of students helping each other. Post your doubts, 
                answer questions, and earn points on the leaderboard.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button size="4" color="blue" className=" text-xl gap-1.5" onClick={() => navigate("/signup")}>
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className=" h-[360px] bg-sky-50 rounded-xl shadow-lg border animate-fade-in" style={{ animationDelay: "500ms" }}>
              <div className="flex items-center justify-center h-full">
                <MessageSquare className="h-20 w-20 text-blue-500 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section1