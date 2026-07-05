import React from 'react';
import Video from './Video';


const TopText = () => {
    return (
        <div className='font-[font1] text-center pt-4'>
            <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center'>L'étincelle</div>


            <div className='text-[9vw] uppercase leading-[8vw] flex items-start justify-center'>qui

                <div className='h-[12vh] w-[15vw] rounded-full overflow-hidden'>
                    <Video />
                </div>

            génère</div>


            <div className='text-[9vw] uppercase leading-[8vw] flex items-center justify-center'>la créativité</div>

        </div>
    );
}

export default TopText;
