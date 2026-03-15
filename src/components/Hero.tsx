import React from 'react'
import orchid from "../assets/Images/orchid.jpg"

const Hero = () => {
  return (
    <div className="relative pt-15">
      <img src={orchid} alt="cover_page" className=" h-screen w-full "></img>
      <h3 className="absolute top-20 right-64 text-white text-3xl  font-libre">"Go Green,breathe clean,</h3>
        <h3 className="absolute top-30 right-40 text-white text-3xl  font-libre">Plant a tree today for a better tomorrow."</h3>
        
    </div>
  )
}

export default Hero
