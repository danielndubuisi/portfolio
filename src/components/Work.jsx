import React from 'react';
// motion
import {motion} from 'framer-motion'
// variants
import { fadeIn } from '../variants';
// images
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return (
    <section className='section' id='work'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}} 
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* text */}
            <div>
              <h2 className='h2 text-[25px] leading-tight text-accent'>My lastest <br/> Work.</h2>
              <p className='lg:max-w-sm lg:mb-16 lg:text-[20px] mb-8 text-[16px]'>Have a glimpse at some of my recent projects spanning from a landing page for a startup to new releases on my music projects.</p>
              <button className='btn btn-sm'>View more projects</button>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt="" />
              {/* pre-title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  <a href='https://www.talentpoel.com'>Talentpoel</a>
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='lg:text-3xl text-lg text-white'>Startup website </span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}               
            className='flex-1 flex flex-col gap-y-10'>
            {/* images-right */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt="" />
              {/* pre-title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Dashboard design</span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='lg:text-3xl text-lg  text-white'>Mapper project</span>
              </div>
            </div>
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* img */}
              <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt="" />
              {/* pre-title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>
                  <a href='https://linktr.ee/vinemusicoffical'>V.I.N.E.</a>
                </span>
              </div>
              {/* title */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='lg:text-3xl text-lg  text-white'>New Releases</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
)};

export default Work;
