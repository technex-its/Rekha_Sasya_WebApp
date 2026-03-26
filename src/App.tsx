import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Hero from './components/Hero'
import Species from './components/Species'
import RecentPhotos from './components/RecentPhotos'


function App() {

  return (
   
    <div className="bg-[#fffeed] min-h-screen  flex flex-col">
       
      <Header />
     
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
      </div>
  )
}

export default App
