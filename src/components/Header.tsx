import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {  Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  return (

    
   <header  className="fixed top-0 w-full z-50 transition-all duration-500 bg-black  backdrop-blur-sm shadow-lg " >
      <div className="container mx-auto px-6 ">
        <div className="flex justify-between items-center">
          <div className="flex items-center ">
            <img 
              src="/src/assets/potted_plant.svg" 
              alt="Logo" 
              className="h-16 w-15 object-contain transform hover:scale-105 transition-transform duration-300" 
            />
            <div className='flex-col leading-none'>
            
            <p className="text-white text-6xl  font-island ">Sasya</p>
            <p className="text-white ml-20  text-xs font-instrumentserif"> Reason to Breathe</p>
        
            </div>
          </div>
          <div className="bg-[#C2394C] rounded-full mr-2">
          <nav className="hidden md:flex pr-3" >
            {['Home', 'About Us', 'Projects', 'Gallery', 'Contact Us','Sign In'].map((item,index) => (
          
             
              <Link key={index} to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="p-3 w-auto whitespace-nowrap text-white-700 font-medium rounded-full hover:bg-red-100 hover:text-[#C2394C]  active:bg-purple-200 transition-all duration-300 transform hover:-translate-y-0.5">
                {item == 'Projects' ? (
          <span className="flex items-center gap-1">
            {item}
            <img src="/down_arrow.png" className="h-4 w-4" />
          </span>
        )   : item }
              </Link>
            ))}
            <img src="/src/assets/profile.svg" alt="profile" className='h-10 w-10  rounded-full hover:bg-red-200 object-contain'/>
           </nav>
          </div>


          <div className="md:hidden ">
            <button 
              className="bg-green-500 text-White-700 p-2.5 hover:bg-red-100 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
       
      {isMenuOpen && (
        <nav className="bg-[#C2394C] md:hidden flex mt-4 pb-2 space-y-4">
          {['Home', 'About Us', 'Products', 'Research', 'Contact'].map((item, index) => (
            <Link key={index} to={`/${item.toLowerCase().replace(' ', '-')}`} className="px-4 py-2.5 text-white-700 font-medium rounded-lg hover:bg-green-100 hover:text-green-800 active:bg-purple-200 transition-all duration-300 transform hover:-translate-y-0.5">
              {item}
            </Link>
          ))}
             <img src="/src/assets/profile.svg" alt="profile" className='h-10 w-10  rounded-full hover:bg-green-00 object-contain'/>
        </nav>
      )}
      
      </div>
      </header>
          
  );
}

export default Header