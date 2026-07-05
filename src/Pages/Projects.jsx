import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar2 from '../Components/Navigation/Navbar2';


import CardsStructure from '../Components/Cards.jsx/CardsStructure';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const container = useRef(null);

  let cards = [
    { image1: '../public/ProjetsImages/1.png', image2: '../public/ProjetsImages/2.jpg' },
    { image1: '../public/ProjetsImages/3.jpg', image2: '../public/ProjetsImages/4.jpg' },
    { image1: '../public/ProjetsImages/5.jpg', image2: '../public/ProjetsImages/6.jpg' },
    { image1: '../public/ProjetsImages/7.jpg', image2: '../public/ProjetsImages/8.jpg' },
    { image1: '../public/ProjetsImages/9.jpg', image2: '../public/ProjetsImages/10.jpg' },
    { image1: '../public/ProjetsImages/11.jpg', image2: '../public/ProjetsImages/12.jpg' },
    { image1: '../public/ProjetsImages/13.jpg', image2: '../public/ProjetsImages/14.jpg' },
    { image1: '../public/ProjetsImages/15.jpg', image2: '../public/ProjetsImages/16.jpg' },
  ]

  useGSAP(() => {
    const innerCards = gsap.utils.toArray('.inner');

    innerCards.forEach((card, i) => {
      const img = card.querySelectorAll('img');

      gsap.from(card, {
        height: '60px',
        ease: 'none',
        scrollTrigger: {
          trigger: '.outer',
          start: 'top 100%',
          end: 'top -150%',
          scrub: true,
        },
        delay: i * 0.03,
      });

      gsap.from(img, {
        scale: 1.25,
        ease: 'none',
        scrollTrigger: {
          trigger: '.outer',
          start: 'top 100%',
          end: 'top -150%',
          scrub: true,
        },
      });
    });
  }, { scope: container });

  return (
    <div>
      <Navbar2/>
      <div ref={container}>
        <div>
          <div className='pt-[40vh] pl-[1vw]'>
            <h2 className='text-black font-[font2] text-[13vw] uppercase'>Projets</h2>
          </div>

          <div className='outer mt-[-5vw] p-2'>
            {cards.map((elem, idx) => (
              <div
                key={idx}
                className='inner overflow-hidden flex gap-2 w-full h-[60vh] mb-4'
              >
                <CardsStructure image1={elem.image1} image2={elem.image2} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Part */}
      <div className='bg-black w-full h-[70vh] mt-10 flex flex-col justify-between'>
        <div className='flex items-center justify-between w-full h-[15vh]  px-3'>
          <div className='flex gap-4'>
            <div>
              <h2 className='hover:text-[#CCFF00] font-[font2] text-6xl border-3 rounded-full px-4 pt-3 cursor-pointer'>FB</h2>
            </div>
            <div>
              <h2 className='hover:text-[#CCFF00] font-[font2] text-6xl border-3 rounded-full px-4 pt-3 cursor-pointer'>IG</h2>
            </div>
            <div>
              <h2 className='hover:text-[#CCFF00] font-[font2] text-6xl border-3 rounded-full px-4 pt-3 cursor-pointer'>IN</h2>
            </div>
            <div>
              <h2 className='hover:text-[#CCFF00] font-[font2] text-6xl border-3 rounded-full px-4 pt-3 cursor-pointer'>BE</h2>
            </div>
          </div>
          <div>
            <h2 className='hover:text-[#CCFF00] font-[font2] text-6xl border-3 rounded-full px-4 pt-3 cursor-pointer'>Contact</h2>
          </div>
        </div>


        <div className='flex items-center justify-between w-full h-[15vh]  px-3'>
          <div className='flex gap-4'>
            <div>
              <h2 className='hover:text-[#CCFF00] uppercase whitespace-nowrap font-[font1] text-sm px-4 pt-3 cursor-pointer'>Politique de confidentialité</h2>
            </div>
            <div>
              <h2 className='hover:text-[#CCFF00] uppercase whitespace-nowrap font-[font1] text-sm px-4 pt-3 cursor-pointer'>Avis de confidentialité</h2>
            </div>
            <div>
              <h2 className='hover:text-[#CCFF00] uppercase whitespace-nowrap font-[font1] text-sm px-4 pt-3 cursor-pointer'>Rapport éthique</h2>
            </div>
            <div>
              <h2 className='hover:text-[#CCFF00] uppercase whitespace-nowrap font-[font1] text-sm px-4 pt-3 cursor-pointer'>Options De Consentement</h2>
            </div>
          </div>
          <div>
            <h2 className='hover:text-[#CCFF00] uppercase whitespace-nowrap font-[font1] text-sm px-4 pt-3 cursor-pointer'>Retour En Haut</h2>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;