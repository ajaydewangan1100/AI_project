import React from 'react';

const HeroVideo = () => {
  const videoSrc = "src/assets/hero_video.mp4";
  return (
    <div>
      <video className='w-full h-auto' autoPlay loop muted>
        <source src={ videoSrc } type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroVideo;
