import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-8 bg-blue-300 py-4 px-6 md:px-8 justify-between items-center'>
      <div className="left">
      <Link to={"/"} className='font-semibold text-xl md:text-2xl font-["poppins"] logo'>
        Word Counter
      </Link>
      </div>
      <div className="right flex gap-[1vw]">
      <Link to={"/about"} className='cursor-pointer'>About</Link>
      <Link to={"/contact"} className='cursor-pointer'>Contact</Link>
      <Link to={"/gallery"} className='cursor-pointer'>Gallery</Link>
      </div>
    </div>
  );
}

export default Navbar;
