import React from 'react';
//icon
import {BsArrowRight} from 'react-icons/bs'
// motion
import {motion} from 'framer-motion'
// variants
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: 'Development',
    description: 'Crafting digital experiences - From concept to deployment, I bring your ideas to life through clean, efficient code to build robust and scalable applications tailored to your specific needs.',
    link: 'Learn more',
  },
  {
    name: 'Database Mangement & Analysis',
    description: 'Unlocking the power of data - I specialize in data analysis, transforming raw data into actionable insights to empower Data-driven solutions...',
    link: 'Learn more',
  },
  {
    name: 'Vocal sampling',
    description: 'Crafting unique soundscapes - With almost a decade singing, sampling with my instrument creates one-of-a-kind sounds.',
    link: 'Learn more',
  },
  {
    name: 'Mixing and mastering',
    description: 'Mastering sound and achieving polished and professional sounds.',
    link: 'Learn more',
  },

]

const Services = () => {
  return <section className='section lg:my-[120px]' id='services'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}         
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='lg:h2 h3 text-accent lg:mb-6 mb-3'>What I Do</h2>
          <h3 className='font-primary lg:font-light text-[14px] leading-[20px] lg:h3 lg:leading-[38px] lg:max-w-[455px] lg:mb-16 mb-8'>I design, develop and analyse by day. By night, I create harmonic structures. My alter ego of sorts, but that's me.</h3>
          <button className='btn btn-sm'>
            <a href="#work">
              See my work
            </a>
          </button>
        </motion.div>
        {/* services */}
        <motion.div 
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}           
          className='flex-1'>
          {/* service list */}
          <div>
            {services.map((service, index) => {
              // destructure service
              const {name, description, link} = service
              return (
                <div className='flex flex-col' key={index}>
                  <div className='flex py-2'>
                    <div className='max-w-[476px]'>
                      <h4 className='lg:text-[20px] text-[14px] tracking-wider font-primary font-semibold lg:mb-6 mb-2'>{name}</h4>
                      <p className='font-secondary lg:text-[19px] text-[14px] leading-[22px] lg:leading-[35px] lg:w-full w-[280px]'>{description}</p>
                    </div>
                    <div className='flex flex-col flex-1 items-end justify-between'>
                      <a href="#contact" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                        <BsArrowRight />
                      </a>
                      <a href="#contact" className='text-gradient lg:text-sm text-[8px]'>{link}</a>
                    </div>
                  </div>
                  <div className='border-b w-full border-white/20 h-[20px]'></div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
