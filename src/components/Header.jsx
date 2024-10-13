import React from 'react';
// import images
import Logo from '../assets/new_logo2.png'

const Header = () => {
  return <header className='py-8'>
    <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        {/* logo */}
        <div className='mix-blend-lighten -mt-[125px] w-[130px] h-[0px] lg:-ml-7'>
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
