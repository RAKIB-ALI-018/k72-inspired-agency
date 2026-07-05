import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useContext } from 'react';
import { ScrollTrigger } from 'gsap/all';
import { NavbarContext } from '../Context/NavContext';

import { useNavigate } from 'react-router-dom';

const FullScreenNav = () => {
    const navigate = useNavigate();

    const fullNavLinksRef = useRef(null);
    const fullScreennav = useRef(null);
    const tlRef = useRef(null);
    const [navOpen, setNavOpen] = useContext(NavbarContext);

    // Build the timeline once on mount, paused
    useGSAP(function () {
        const tl = gsap.timeline({ paused: true })

        tl.from('.stairing', {
            height: 0,
            stagger: { amount: -0.2 }
        })

        tl.from('.topBar', {
            opacity: 0,
            y: -30,
        }, "<")

        tl.from('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: { amount: 0.2 }
        })

        tlRef.current = tl
    }, [])

    // Play + LOCK BODY SCROLL when navOpen becomes true
    useGSAP(function () {
        if (!tlRef.current) return

        if (navOpen) {
            gsap.set('#fullScreenNav', { display: 'block' })
            document.body.style.overflow = 'hidden'
            tlRef.current.play(0)
        }
    }, [navOpen])

    // Reverse animation, then cleanup + optionally navigate
    function handleClose(path) {
        if (!tlRef.current) return

        tlRef.current.eventCallback('onReverseComplete', () => {
            gsap.set('#fullScreenNav', { display: 'none' })
            document.body.style.overflow = ''
            ScrollTrigger.refresh()
            setNavOpen(false)
            if (path) navigate(path)
        })
        tlRef.current.reverse()
    }

    return (
        <div ref={fullScreennav} id='fullScreenNav' className='fixed top-0 left-0 z-100 overflow-hidden h-screen w-full bg-black text-white hidden'>
            <div className='h-screen w-screen fixed top-0 left-0'>
                <div className='h-full w-full flex '>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>

            <div ref={fullNavLinksRef} className='relative z-10'>

                <div className='topBar w-full h-[15vw]  flex items-start justify-between '>
                    <div>
                        <svg className='ml-4 mt-4' xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                            <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </div>
                    <div onClick={() => handleClose()}
                        className='cross relative  w-[11vw] h-[15vw] mt-[1vw] mr-[1vw]'>
                        <div className='cross-lines h-full w-1 bg-white -rotate-45 origin-top absolute'></div>
                        <div className='cross-lines h-full w-1 bg-white rotate-45 right-0 origin-top absolute'></div>
                    </div>
                </div>

                <div className="allLinks  w-full overflow-x-hidden">

                    <div className="link origin-top border-t relative flex items-center justify-center ">
                        <h1 className='font-[font2] text-[5vw] uppercase '>Projects</h1>
                        <div className='moveLink h-full w-full absolute flex items-center '>
                            <div onClick={() => handleClose('/projects')} className='moveX bg-[#CCFF00] items-center   flex  '>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail1-1.png" alt="" />
                                <h2 className='  text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Pour Tout Voir</h2>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail1-2.jpg" alt="" />
                                <h2 className='  text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Pour Tout Voir</h2>
                            </div>
                            <div onClick={() => handleClose('/projects')} className='moveX bg-[#CCFF00] items-center   flex  '>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail1-1.png" alt="" />
                                <h2 className='  text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Pour Tout Voir</h2>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail1-2.jpg" alt="" />
                                <h2 className=' text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Pour Tout Voir</h2>
                            </div>
                        </div>
                    </div>

                    <div className="link origin-top border-t relative flex items-center justify-center ">
                        <h1 className='font-[font2] text-[5vw] uppercase '>Agence</h1>
                        <div className='moveLink h-full w-full absolute flex items-center '>
                            <div onClick={() => handleClose('/agence')} className='moveX bg-[#CCFF00] items-center   flex  '>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail2-1.jpg" alt="" />
                                <h2 className='  text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Pour Tout Savoir</h2>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail2-2.jpg" alt="" />
                                <h2 className='  text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Pour Tout Savoir</h2>
                            </div>
                            <div onClick={() => handleClose('/agence')} className='moveX bg-[#CCFF00] items-center   flex  '>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail2-1.jpg" alt="" />
                                <h2 className='  text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Pour Tout Savoir</h2>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail2-2.jpg" alt="" />
                                <h2 className=' text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Pour Tout Savoir</h2>
                            </div>
                        </div>
                    </div>

                    <div className="link origin-top border-t relative flex items-center justify-center ">
                        <h1 className='font-[font2] text-[5vw] uppercase '>Contact</h1>
                        <div className='moveLink h-full w-full absolute flex items-center '>
                            <div className='moveX bg-[#CCFF00] items-center   flex  '>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail1-1.png" alt="" />
                                <h2 className='  text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Pour Envoyer Un Fax</h2>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail1-2.jpg" alt="" />
                                <h2 className='  text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Pour Envoyer Un Fax</h2>
                            </div>
                            <div className='moveX bg-[#CCFF00] items-center   flex  '>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail1-1.png" alt="" />
                                <h2 className='  text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Pour Envoyer Un Fax</h2>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail1-2.jpg" alt="" />
                                <h2 className=' text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Pour Envoyer Un Fax</h2>
                            </div>
                        </div>
                    </div>

                    <div className="link origin-top border-y relative flex items-center justify-center ">
                        <h1 className='font-[font2] text-[5vw] uppercase '>Blogue</h1>
                        <div className='moveLink h-full w-full absolute flex items-center '>
                            <div className='moveX bg-[#CCFF00] items-center   flex  '>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail4-1.jpg" alt="" />
                                <h2 className='  text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Lier Les Articles</h2>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail4-2.png" alt="" />
                                <h2 className='  text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Lier Les Articles</h2>
                            </div>
                            <div className='moveX bg-[#CCFF00] items-center   flex  '>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail4-1.jpg" alt="" />
                                <h2 className='  text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Lier Les Articles</h2>
                                <img className='w-[18vw] h-[6vw] object-cover rounded-full shrink-0 mr-2 ml-2' src="../public/FullScreenNavImages/Thumbnail4-2.png" alt="" />
                                <h2 className=' text-black font-[font2] text-[5vw] uppercase whitespace-nowrap'>Lier Les Articles</h2>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FullScreenNav;