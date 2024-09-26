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
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo itaque quas culpa eaque eveniet aperiam possimus voluptas ut, rem assumenda qui reiciendis vitae quos, perferendis',
    link: 'Learn more',
  },
  {
    name: 'Database Mangement & Analysis',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos consequatur aliquam culpa dolore omnis praesentium, minus maiores magnam..',
    link: 'Learn more',
  },
  {
    name: 'Vocal sampling',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo itaque quas culpa eaque eveniet aperiam possimus voluptas',
    link: 'Learn more',
  },
  {
    name: 'Mixing and mastering',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo itaque quas culpa eaque eveniet aperiam possimus voluptas',
    link: 'Learn more',
  },

]

const Services = () => {
  return <section className='section' id='services'>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        {/* text */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}         
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
          <h2 className='h2 text-accent mb-6'>What I Do</h2>
          <h3 className='h3 max-w-[455px] mb-16'>I'm a Full Stack developer by day and a musician by night. My alter ego of sorts, but that's me.</h3>
          <button className='btn btn-sm'>See my work</button>
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
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                    <a href="#k" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                      <BsArrowRight />
                    </a>
                    <a href="#l" className='text-gradient text-sm'>{link}</a>
                  </div>
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
