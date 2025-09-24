
import React from 'react'
import { Spotlight } from "../components/ui/spotlight-new";
import { Button } from "@/component/ui/moving-border";
import Link from "next/link"

const HeroSection = () => {
  return (
    <>
       <Spotlight  />
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col item-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
     
     <div className='p-4 relative z-10 w-full text-center '>
<h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
    Master the art of Music
</h1>
<p  className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into our comprehensive music course and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
<div className='mt-8'>
     <Link href={'/courses'}>
 <button className="rounded-[1.75rem] bg-cyan-100 py-3 px-5"
 >Explore Courses</button>
     </Link>
</div>
     </div>
    </div>
    </>
  )
}

export default HeroSection
