import React, { useState } from 'react';

const HeroVideo = () => {
  const [searchText, setSearchText] = useState("kjsh");

  const videoSrc = "src/assets/hero_video.mp4";
  return (
    <div className='relative w-full min-h-[100vh] overflow-hidden '>

      <div className='relative origin-center left-0 w-full min-h-100vh h-auto z-[-10] overflow-hidden flex justify-around content-end content-stretch'>
        <video className='fixed w-full min-h-100vh h-full object-cover' autoPlay loop muted>
          <source src={ videoSrc } type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
      </div>

      <div className='relative h-[100vh] border z-30 text-center p-[50px] '>
          <form className='  bottom-0 left-[50%] origin-center p-[3px] border border-gray-500 border-opacity-20 rounded-2xl w-min mx-auto  '>
            {/* I am here */}
            <input value={searchText} name='search' onChange={(e)=>{
              setSearchText(e.target.value)}} 
              className='  p-2 px-3 w-[30vw] font-2xl text-gray-800 rounded-xl opacity-20 focus:opacity-70 bg-gray-200 focus:bg-gray-100 '  />
            <button type="submit" class="" />
          </form>
        </div>

    </div>
  );
};

export default HeroVideo;
