import React from 'react';
import { Icon } from "@iconify/react";
import { Facebook, Instagram, MessageCircle, Youtube } from 'lucide-react';
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-[#EC9072] pt-3 pb-2 font-hermen">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1   md:grid-cols-3 gap-8 text-center mb-12 ">
            <div className=" items-center pl-10 ">
                          <h3 className=" underline text-xl text-black-800  items-center font-semibold mb-9">Company</h3>
                          <ul>
                              <li>About</li>
                              <li>Partners</li>
                              <li>Blog</li>
                              <li>Jobs</li>
                          </ul>
            </div>
        
          
          <div className="  items-center justify-center">
            <h3 className="text-xl underline text-black-800  items-center font-semibold mb-9">Projects</h3>
            <ul>
                              <li>North America</li>
                              <li>South America</li>
                              <li>Asia</li>
                              <li>Europe</li>
                              <li>Africa</li>
            </ul>
          </div>
          
          <div className="flex flex-col  items-center gap-8 ">
            <h3 className="text-xl text-black-800 underline font-semibold mb-3 mr-6">Connect With Us</h3>
            <div className="flex gap-4 ">
              
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white rounded-full hover:scale-110 transition-transform duration-300 "
              >
                 <img 
              src="/src/assets/icons/mdi--facebook.svg" 
                  alt="Facebook_Icon" 
                  className= "h-10 w-fit"
            />
              </a>
              <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className=" bg-white hover:scale-110 transition-transform duration-300"
              >
                <img 
              src="/src/assets/icons/mdi--youtube.svg" 
              alt="Youtube_Icon" 
              className="h-10 w-fit "
            />
              </a>
              <a 
                href="https://www.linkedin.com"  
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white rounded-full hover:scale-110 transition-transform duration-300"
              >
  <img 
              src="/src/assets/icons/mdi--linkedin.svg" 
              alt="Facebook_Icon" 
              className="h-10 w-fit "
            />
                </a>
               <a 
                href="https://www.twitter.com"  
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-blue-500  rounded-full hover:scale-110 transition-transform duration-300"
              >
                  <img 
              src="/src/assets/icons/mdi--twitter.svg" 
              alt="Facebook_Icon" 
              className="h-10 w-fit "
            />
              </a>
              <a 
                href="https://www.instagram.com"  
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-600 p-2.5 rounded-full hover:scale-110 transition-transform duration-300"
              >
                
                 <Instagram size={20} className="text-white" />
              </a>
            </div>
            <div className="flex gap-8">
            <h3 className="underline font-hermen text-lg">Email Us</h3>
              <img 
              src="/src/assets/icons/mdi--email.svg" 
              alt="Facebook_Icon" 
              className="h-10 w-fit "
              />
              </div>
          </div>
        </div>
        
        
          <div className="text-center space-y-2">
            <p className="text-black-800 text-sm">
             Sasya © {new Date().getFullYear()} 
            </p>
          </div>
    
      </div>
    </footer>
  )
}

export default Footer