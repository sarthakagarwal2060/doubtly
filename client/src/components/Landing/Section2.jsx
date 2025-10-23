import { Card } from '@radix-ui/themes';
import { BarChart, CheckCircle, MessageSquare, Trophy, Users } from 'lucide-react';
import React from 'react'

function Section2() {

    const features = [
        { icon: MessageSquare, title: "Ask Questions", description: "Post your programming doubts and get answers from experienced developers." },
        { icon: CheckCircle, title: "Get Verified Answers", description: "Receive solutions that have been verified by the community for quality." },
        { icon: BarChart, title: "Track Progress", description: "Keep track of your questions and answers in your personal dashboard." },
        { icon: Trophy, title: "Earn Points", description: "Get points for asking good questions and providing helpful answers." },
        { icon: Users, title: "Join Community", description: "Become part of a supportive community of developers helping each other grow." },
        { icon: MessageSquare, title: "Real-time Updates", description: "Get notified instantly when someone answers your questions." }
      ];

  return (
    <>
        <section className="py-16 md:py-20 flex items-center justify-center bg-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold tracking-tight mb-2">Key Features</h2>
            <p className="text-[#65758B] md:text-xl max-w-2xl mx-auto">
              Everything you need to ask questions and get help from the community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="border-[1px] p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in flex flex-col gap-1" style={{ animationDelay: `${(index + 1) * 100}ms` }} >
                    <feature.icon className="h-10 w-10 text-blue-500 mb-2" />
                    <h2 className='text-2xl font-bold'>{feature.title}</h2>
                    <p className='text-sm text-[#65758B]'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Section2