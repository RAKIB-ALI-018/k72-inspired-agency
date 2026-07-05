import React from 'react';
import {Link} from 'react-router-dom'

const BottomText = () => {
  return (
    <div className=' flex items-center justify-center gap-6 mb-2'>
        <Link to='/projects' className='font-[font2] text-[6vw] border-3 pt-2.5 px-5 uppercase rounded-full  leading-[6vw] hover:text-[#CCFF00]'>Projects</Link>
        <Link to='/agence' className='font-[font2] text-[6vw] border-3 pt-2.5 px-5 uppercase rounded-full  leading-[6vw] hover:text-[#CCFF00]'>Agence</Link>
      
    </div>
  );
}

export default BottomText;
