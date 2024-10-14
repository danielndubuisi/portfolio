import React from 'react';
// motion
import {motion} from 'framer-motion'
// variant
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='lg:py-16 lg:section' id='contact'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}                    
            className='flex-1 flex lg:justify-start justify-center items-center'>
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[32px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}                     
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 lg:items-start items-center lg:w-full lg:h-full'>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Full name'
              type="text" 
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Email address'
              type="text" 
            />
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' placeholder='Leave a message'></textarea>
              <button className='btn lg:btn-lg btn-md text-sm px-4 py-2'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
)};

export default Contact;
