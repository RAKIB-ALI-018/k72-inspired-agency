import React from 'react';
import Video from '../Components/Home/Video';
import TopText from '../Components/Home/TopText';
import BottomText from '../Components/Home/BottomText';
import MiddleText from '../Components/Home/MiddleText';
import Navbar from '../Components/Navigation/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='h-dvh w-screen fixed'>
        <Video />
      </div>
      <div>
        <MiddleText/>
      </div>
      <div className='w-screen h-dvh relative flex flex-col justify-between'>
        <TopText />
        <BottomText />
      </div>
    </div>
  );
}

export default Home;
