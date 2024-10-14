import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer
import {useInView} from 'react-intersection-observer'
// motion
import {motion} from 'framer-motion'
// variant
import { fadeIn } from '../variants'

const About = () => {
  const [ref, Inview] = useInView({
    threshold: 0.5,
  })
  return (
  <section className='section' id='about' ref={ref}>
    <div className="container mx-auto">
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* Img */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-screen bg-center'></motion.div>
        {/* text */}
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}   
          className='flex-1'>
          <h2 className='lg:h2 h3 text-accent'>About me</h2>
          <h3 className='lg:h3 text-l font-bold leading-[25px] mb-4 -mt-3'>I am a Full Stack Developer with over 3 years of experience building web and software applications.</h3>
          <p className='mb-6 text-sm font-medium leading-[28px] lg:text-[18px] lg:font-normal lg:leading-[36px]'>I leverage my technical expertise and analytical skills to transform ideas into reality. Beyond my coding pursuits, I have a lifelong passion for creating and performing music. Music serves as a source of inspiration and balance in my life, enriching my perspective and fueling my drive for excellence.</p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12 justify-start'>
            <div>
              <div className='lg:text-[40px] text-[30px] font-tertiary text-gradient lg:mb-2 mb-0'>
                {Inview ? <CountUp start={0} end={3} duration={5} /> : null}
                +
              </div>
              <div className='lg:font-primary font-semibold lg:text-sm lg:tracking-[2px] text-sm'>
                Years of <br />
                Experience
              </div>
            </div>
            <div>
              <div className='lg:text-[40px] text-[30px] font-tertiary text-gradient lg:mb-2 mb-0'>
                {Inview ? <CountUp start={0} end={150} duration={3} /> : null}
                +
              </div>
              <div className='lg:font-primary lg:text-sm lg:tracking-[2px] font-semibold text-sm'>
                Projects <br />
                Completed
              </div>
            </div>
            <div>
              <div className='lg:text-[40px] text-[30px] font-tertiary text-gradient lg:mb-2 mb-0'>
                {Inview ? <CountUp start={0} end={2} duration={5} /> : null}
                k+
              </div>
              <div className='lg:font-primary font-semibold text-sm lg:tracking-[2px]'>
                Monthly <br />
                Listeners
              </div>
            </div>
          </div>
          <div className='flex gap-x-8 items-center'>
            <button className='btn btn-lg'><a href='#contact'>Contact me</a></button>
            <a href="#work" className='text-gradient btn-link'>
              My Portfolio
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)};

export default About;
