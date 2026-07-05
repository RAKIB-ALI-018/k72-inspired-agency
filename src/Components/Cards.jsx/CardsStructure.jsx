import React from 'react';

const CardsStructure = (props) => {
    return (
        <>
            
                <div className='w-1/2  group overflow-hidden relative hover:rounded-4xl transition-all'>
                    <img className=' h-full w-full object-cover  overflow-hidden' src={props.image1} alt="" />
                    <div className='opacity-0 group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center  '>
                        <h2 className='font-[font1] text-6xl uppercase border-white border-2 rounded-full px-4 pt-3'>Voir Le Projet</h2>
                    </div>
                </div>


                <div className='w-1/2  group overflow-hidden relative hover:rounded-4xl transition-all'>
                    <img className=' h-full w-full object-cover  overflow-hidden' src={props.image2} alt="" />
                    <div className='opacity-0 group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/10 flex items-center justify-center  '>
                        <h2 className='font-[font1] text-6xl uppercase border-white border-2 rounded-full px-4 pt-3'>Voir Le Projet</h2>
                    </div>
                </div>

           
        </>
    );
}

export default CardsStructure;
