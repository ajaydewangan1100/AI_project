import React, { useState } from 'react';
import MainVid from "../assets/hero_video.mp4"

const HeroVideo = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className='relative w-full min-h-[100vh] overflow-hidden '>

      <div className='relative origin-center left-0 w-full min-h-100vh h-auto z-[-10] overflow-hidden flex justify-around content-end content-stretch'>
        <video className='fixed w-full min-h-100vh h-full object-cover' autoPlay loop muted>
          <source src={MainVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>

      <div className='absolute bottom-0 w-full left-0 h-[100vh] text-center p-[50px] '>
          <form className='relative top-[60vh] origin-center w-full p-[3px]  border-opacity-10 rounded-2xl '>
            {/* I am here */}
            <input value={searchText} name='search' onChange={(e)=>{
              setSearchText(e.target.value)}} 
              className='p-2 px-5 min-w-[220px] w-[30vw] text-xl font-semibold text-gray-800 rounded-3xl opacity-20 focus:opacity-70 bg-gray-200 focus:bg-gray-100 focus:outline-none' placeholder='Search AI here' />
            <button type="submit" className="" />
          </form>
        </div>

    </div>
  );
};

export default HeroVideo;
