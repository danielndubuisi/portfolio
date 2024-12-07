import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import { toast } from 'react-toastify';

// motion
import {motion} from 'framer-motion'
// variant
import { fadeIn } from '../variants';

const Contact = () => {
  const formData = useRef();
  // const serviceID = process.env.EMAIL_SERVICE_ID
  // const templateID = process.env.EMAIL_TEMPLATE_ID
  // const publicKey = process.env.EMAIL_PUBLIC_KEY


  const sendEmail = (e) => {
    e.preventDefault();
    
    console.log(formData.user_name);

    // emailjs
    //   .sendForm(serviceID, templateID, formData.current, {
    //     publicKey
    //   })
    //   .then(
    //     () => {
    //       toast.success('Message sent!')
    //       formData.current.reset()
    //     },
    //     (error) => {
    //       console.log('FAILED...', error.text);
    //       toast.error('Error!')
    //     },
    //   )
    };

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
            ref={formData}  
            onSubmit={sendEmail}                   
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 lg:items-start items-center lg:w-full lg:h-full'>
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Full name'
              name='user_name'
              type="text" 
            />
            <input 
              className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
              placeholder='Email address'
              name='user_email'
              type="email" 
            />
            <textarea 
              className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' 
              name='message'
              placeholder='Leave a message'/>
            <button type='submit' className='btn lg:btn-lg btn-md text-sm px-4 py-2'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
)};

export default Contact;
