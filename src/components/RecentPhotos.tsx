import React from 'react'


const RecentPhotos = () => {
  return (
    <div className="font-libre px-6 md:px-16 pb-20 text-2xl">
      
      <h2 className="underline mb-6">Recent Photos</h2>

      <div className="relative flex flex-col md:flex-row gap-6">

        {/* Left Images */}
        <div className="flex flex-col gap-6 md:w-1/2">
          <img
            src="/Images/Recent_photos/bluebells.jpg"
            className="w-130 h-30 md:h-60 object-cover "
            alt="bluebells"
          />

          <img
            src="/Images/Recent_photos/redwood.jpg"
            className="w-130 h-30 md:h-60 object-cover "
            alt="redwood"
          />
        </div>

        {/* Right Image */}
        <div className="md:w-600">
          <img
            src="/Images/Recent_photos/deep_forest.jpg"
            className="w-500 h-125 md:h-125 object-cover "
            alt="deep forest"
          />
        </div>

        {/* Button */}
        <button className="absolute bottom-10 right-10  md:mt-0  flex items-center gap-3 bg-green-500 text-white px-5 py-3 rounded-full text-lg md:text-xl font-medium group hover:bg-green-600 transition">
          
          Explore More

          <span className="transform transition-transform duration-300 group-hover:translate-x-2">
            <img src="/arrow-up.png" className="h-6 w-6 md:h-8 md:w-8" alt="arrow" />
          </span>

        </button>

      </div>
    </div>
  );
};

export default RecentPhotos;