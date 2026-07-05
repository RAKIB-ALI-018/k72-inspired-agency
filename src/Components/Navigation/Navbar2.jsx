import React, { useRef, useContext } from 'react';
import { NavbarContext } from '../Context/NavContext';

import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const thirdRef = useRef(null);

    const [navOpen, setNavOpen] = useContext(NavbarContext);


    return (
        <div className='z-10 fixed flex top-0 items-start justify-between w-full'>
            <svg className='ml-2 mt-2' xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                <path fill='black' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>

            {/* Menu Option */}

            <div className='flex'>
                <div
                    onClick={() => navigate('/projects')}
                    onMouseEnter={() => { firstRef.current.style.height = '100%' }}
                    onMouseLeave={() => { firstRef.current.style.height = '0%' }}
                    className='h-[4vw] w-[20vw] relative cursor-pointer'>
                    <div className='black-menu bg-black h-full w-full flex items-end pl-2'>
                        <h2 className='uppercase text-white font-[font1] text-2xl '>Projets</h2>
                    </div>
                    <div ref={firstRef} className='transition-all colored-menu bg-[#CCFF00]  w-full absolute top-0 h-0 flex items-end pl-2'>
                        <h2 className='uppercase text-black font-[font1] text-2xl'>Projets</h2>
                    </div>
                </div>

                <div
                    onClick={() => navigate('/agence')}
                    onMouseEnter={() => { secondRef.current.style.height = '100%' }}
                    onMouseLeave={() => { secondRef.current.style.height = '0%' }}
                    className='h-[7vw] w-[27vw] relative cursor-pointer'>
                    <div className='black-menu bg-black h-full w-full flex items-end pl-2'>
                        <h2 className='uppercase text-white font-[font1] text-2xl '>Agence</h2>
                    </div>
                    <div ref={secondRef} className='transition-all colored-menu bg-[#CCFF00]  w-full absolute top-0 h-0 flex items-end pl-2'>
                        <h2 className='uppercase text-black font-[font1] text-2xl '>Agence</h2>
                    </div>
                </div>

                <div
                    onClick={() => { setNavOpen(true) }}
                    onMouseEnter={() => { thirdRef.current.style.height = '100%' }}
                    onMouseLeave={() => { thirdRef.current.style.height = '0%' }}
                    className='h-[10vw] w-[16vw] relative cursor-pointer'>
                    <div className='black-menu bg-black h-full w-full flex items-end pl-2'>
                        <h2 className='uppercase text-white font-[font1] text-2xl '>Menu</h2>
                    </div>
                    <div ref={thirdRef} className='transition-all colored-menu bg-[#CCFF00]  w-full absolute top-0 h-0 flex items-end pl-2'>
                        <h2 className='uppercase text-black font-[font1] text-2xl '>Menu</h2>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Navbar;