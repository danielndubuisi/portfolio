import React from 'react';
// import images
import Logo from '../assets/new_logo2.png'

const Header = () => {
  return <header className='pb-2'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/* logo */}
        <div className='mix-blend-lighten w-[80px] lg:w-[100px] lg:-ml-5'>
          <a href="/">
            <img src={Logo} alt="" className='w-full' />
          </a>
        </div>
        {/* button */}
        <button className='btn btn-sm'><a href='#contact'>Work with me</a></button>
      </div>
    </div>
  </header>;
};

export default Header;
