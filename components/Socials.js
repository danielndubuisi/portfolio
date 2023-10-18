import Link from "next/link";

// icons
import {RiFacebookLine, RiInstagramLine, RiLinkedinLine, RiPinterestLine, RiTiktokLine, RiYoutubeLine, } from 'react-icons/ri'

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiYoutubeLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiTiktokLine />
    </Link>
    <Link href={''} className="hover:text-accent transition-all duration-300">
      <RiPinterestLine />
    </Link>
  </div>;
};

export default Socials;
