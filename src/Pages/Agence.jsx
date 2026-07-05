import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Navbar2 from '../Components/Navigation/Navbar2';

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)
  const imageWrapperRef = useRef(null);
  const imageRef = useRef(null);

  const teamSectionRef = useRef(null);
  const textListRef = useRef(null);
  const imageRef2 = useRef(null);

  const imageArray = [
    '/images/img-1.jpg',
    '/images/img-2.jpg',
    '/images/img-3.jpg',
    '/images/img-4.jpg',
    '/images/img-5.jpg',
    '/images/img-6.jpg',
    '/images/img-7.jpg',
    '/images/img-8.jpg'
  ]

  const teamArray = [
    { name: 'Marc-Antoine Godbout', role: 'Directeur Principal', image: imageArray[0] },
    { name: 'Alex Sauvageau', role: 'Directeur Artistique', image: imageArray[1] },
    { name: 'Camille Brière', role: 'Conceptrice-Rédactrice', image: imageArray[2] },
    { name: 'Stéphanie Brunelle', role: 'Conseillère Principale', image: imageArray[3] },
    { name: 'Pierre-Luc Paiement', role: 'VPP et Directeur Général', image: imageArray[4] },
    { name: 'Mélanie Laviolette', role: 'Directrice Artistique', image: imageArray[5] },
  ];

  // Section 1 — sticky-based image cycling 
  useGSAP(function () {
    ScrollTrigger.create({
      trigger: imageWrapperRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1,
      onUpdate: (self) => {
        let imageIdx = self.progress < 1
          ? Math.floor(self.progress * imageArray.length)
          : imageArray.length - 1;
        if (imageRef.current) {
          imageRef.current.src = imageArray[imageIdx];
        }
      }
    });
  }, [])

  // Section 3 — Team scroll animation 
  useGSAP(function () {
    const total = teamArray.length;

    gsap.to(textListRef.current, {
      yPercent: -100 * (total - 1) / total,
      ease: 'none',
      scrollTrigger: {
        trigger: teamSectionRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const idx = Math.min(total - 1, Math.floor(self.progress * total));
          if (imageRef2.current) {
            imageRef2.current.src = teamArray[idx].image;
          }
        }
      }
    });
  }, [])

  return (
    <div className='bg-white  text-black relative'>

      <Navbar2 />

      <div className='section1 relative'>
        <div className='relative '>
          <div className='pt-[58vh]'>
            <h1 className='text-[19vw] uppercase leading-[17vw] text-center font-[font2]  '>Soixan7e <br />Douze</h1>
          </div>

          {/* Tall wrapper — text ke peeche (-z-10) */}
          <div
            ref={imageWrapperRef}
            className='absolute left-[31vw] top-0 w-[16vw] '
            style={{ height: '250vh' }}
          >
            <div className='sticky top-[15vw] h-[22vw] w-[16vw] rounded-3xl overflow-hidden'>
              <img ref={imageRef} className='h-full w-full object-cover' src="/images/img-1.jpg" alt="" />
            </div>
          </div>

          <div className='pl-[40%] text-5xl font-[font1] leading-[4vw]'>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>

      <div className="section2 h-dvh pt-52">
        <div className='w-full  flex gap-96 font-[font1] text-xl pl-44'>
          <div><h3>Expertise</h3></div>
          <div>
            <h3>Strategie</h3>
            <h3>Publicite</h3>
            <h3>Branding</h3>
            <h3>Design</h3>
            <h3>Contenu</h3>
          </div>
        </div>
        <div className='flex gap-20 pl-44 w-full mt-40 font-[font1] text-xl'>
          <div className='w-1/4'><p>Notre création_ bouillonne dans un environnement où le talent a le goût d’exploser. Où on se sent libre d’être la meilleure version de soi-même.</p></div>
          <div className='w-1/4'><p>Nos projets_ naissent dans l’humilité, grandissent dans la curiosité et vivent grâce à la créativité sous toutes ses formes.</p></div>
          <div className='w-1/4'><p>Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage participe à bâtir une agence dont on est fiers.</p></div>
        </div>
      </div>

      {/* Section 3 — Team scroll (K72 style) */}
      <div
        ref={teamSectionRef}
        className="relative w-full bg-black"
        style={{ height: `${teamArray.length * 100}vh` }}
      >
        <div className="sticky top-0 h-dvh w-full overflow-hidden flex items-center">

          <div className="h-[70vh] w-[30vw] rounded-3xl overflow-hidden ml-[8vw] shrink-0">
            <img
              ref={imageRef2}
              className="h-full w-full object-cover"
              src={teamArray[0].image}
              alt=""
            />
          </div>

          <div className="relative flex-1 h-dvh overflow-hidden">
            <div ref={textListRef} className="w-full" style={{ height: `${teamArray.length * 100}vh` }}>
              {teamArray.map((member, i) => (
                <div
                  key={i}
                  className="h-dvh w-full flex flex-col justify-center pl-[6vw]"
                >
                  <h2 className="text-[#CCFF00] uppercase font-[font2] text-[4vw] leading-none">
                    {member.name}
                  </h2>
                  <p className="text-white uppercase font-[font1] text-xl mt-4">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Part */}
      <div className='bg-white w-full h-[70vh]  flex flex-col justify-between'>
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

export default Agence;