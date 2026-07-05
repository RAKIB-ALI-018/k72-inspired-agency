import React from 'react';

const Video = () => {
  return (
    <div className='h-dvh w-full'>
        <video 
        autoPlay
        loop
        muted
        className='h-full w-full object-cover'
       src="/HomeVideo.mp4"></video>
      
    </div>
  );
}

export default Video;