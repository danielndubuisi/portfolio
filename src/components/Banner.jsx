import React from 'react';
// images
import Image from '../assets/avatar.svg'
// icons
import { FaGithub, FaSpotify, FaInstagram, FaYoutube, FaLinkedin} from 'react-icons/fa'
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left lg:gap-x-12'>
          <motion.h1 
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='text-[40px] font-bold leading-[0.8] lg:text-[80px]'
          >
            DANIEL <span>NDUBUISI</span></motion.h1>
          <motion.div 
            variants={fadeIn('up', 0.45)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-2'>I am</span>
            <TypeAnimation 
              sequence={[
              'A Developer',
              2000,
              'A Designer',
              2000,
              'A Musician',
              2000,
              'An Analyst',
              2000
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
            />
          </motion.div>
          {/* paragraph description */}
          <motion.p 
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='mb-8 max-w-lg mx-auto lg:mx-0'>From writing code to composing melodies, my work is a harmonious blend of creative genius - design, development and musical symphonies coming together to create digital and harmonic masterpieces.
          </motion.p>
          <motion.div 
            variants={fadeIn('up', 0.75)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'><a href="#contact">Contact me</a></button>
            <a href="#work" className='text-gradient btn-link'>My portfolio</a>
          </motion.div>
          {/* socials */}
          <motion.div 
            variants={fadeIn('up', 0.9)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href="https://github.com/danielndubuisi/" className='hover:text-purple-400 transition-all'>
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/pharmadevdaniel/" className='hover:text-blue-400 transition-all'>
              <FaLinkedin />
            </a>
            <a href="https://open.spotify.com/artist/2xoJJCbOFxFXFmI8KgATtJ?si=LK-_lfhjSzqg6AqjCrSVeA" className='hover:text-green-400 transition-all'>
              <FaSpotify />
            </a>
            <a href="https://www.instagram.com/vinemusicofficial?igsh=cmdvcTM4cGw1czF0" className='hover:text-pink-400 transition-all'>
              <FaInstagram />
            </a>
            <a href="#c" className='hover:text-red-500 transition-all'>
              <FaYoutube />
            </a>
          </motion.div>
        </div>
        {/* image */}
        <motion.div
          variants={fadeIn('down', 0.6)}
          initial='hidden'
          whileInView={'show'}
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt="" />
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Banner;
