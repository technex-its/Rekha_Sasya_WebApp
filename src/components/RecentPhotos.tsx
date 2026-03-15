import React from 'react'

const RecentPhotos = () => {
  return (
    
    <div className=" font-libre mx-15 pb-24 text-2xl underline ">RecentPhotos
      <div className='relative flex  gap-8'>
    <div className="flex-col">
        <img src="/Images/Recent_photos/bluebells.jpg " className="h-75 w-130 p-2.5"></img>
        <img src="/Images/Recent_photos/redwood.jpg " className="h-75 w-130  p-2.5"></img>
    </div>
          <img src="/Images/Recent_photos/deep_forest.jpg " className="h-150 w-500 p-2.5"></img>
    <button className="absolute bottom-15 right-15 flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-full text-2xl font-medium group hover:bg-green-600 transition">

            Explore More

     <span className="   text-white rounded-full transform transition-transform duration-300 group-hover:translate-x-2">
          <img src="/arrow-up.png" className="h-10 w-10" alt="arrow" />
     </span>

</button>
        </div>
    </div>
  )
}

export default RecentPhotos