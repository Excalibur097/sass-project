import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  }


  return (
   <nav className='w-screen bg-white'>
    <div className='px-[30px] md:px-[70px] py-[15px] flex justify-between items-center'>
      <div>
        {/*Logo*/}
        <div className='text-2xl font-bold text-gray-800 cursor-pointer'>
          Finsweet
        </div>
      </div>
      <div>
      {/*Desktop Menu*/}
        <ul className='hidden lg:flex gap-8 items-center'>
          <li className='text-primary font-bold cursor-pointer'>
            <Link to={'/'}>Home</Link>
          </li>
          <li className='text-primary font-bold cursor-pointer'>
            <Link to={'/product'}>Product</Link>
          </li>
          <li className='text-primary font-bold cursor-pointer'>
            <Link to={'/pricing'}>Pricing</Link>
          </li>
          <li className='text-primary font-bold cursor-pointer'>
            <Link to={'/aboutus'}>About Us</Link>
          </li>
           <li className='text-primary font-bold cursor-pointer'>
            <Link to={'/blog'}>Blog</Link>
          </li>
           <li className='text-primary font-bold cursor-pointer'>
            <Link to={'/contact'}>Contact</Link>
          </li>
          <button className="btn-1">Free trial</button>
        </ul>

        <div className="flex flex-col w-[50px] lg:hidden"onClick={toggleMenu}>
          <div className="w-full h-[3px] bg-primary mb-[5px]"></div>
          <div className="w-full h-[3px] bg-primary mb-[5px]"></div>
          <div className="w-full h-[3px] bg-primary"></div>
        </div>
      </div>
    </div>

    {/*MobileMenu */}
    <div className={`fixed top-0 left-0 w-full h-screen bg-primary flex flex-col justify-top
    items-start transition-transform duration-500 ease-out ${isOpen? 'translate-y-0':'-translate-y-full'}
    tablet:hiden`}>
        <ul className="pt-[30px] px-[60px]">
          <li className='text-white cursor-pointer mb-[30px] tablet:text-4xl' onClick={toggleMenu}>
            <Link to={'/'} className="text-2xl">Home</Link>
          </li>
           <li className='text-white cursor-pointer mb-[30px]' onClick={toggleMenu}>
            <Link to={'/product'} className="text-2xl">Product</Link>
          </li>
           <li className='text-white cursor-pointer mb-[30px]' onClick={toggleMenu}>
            <Link to={'/pricing'} className="text-2xl">Pricing</Link>
          </li>
           <li className='text-white cursor-pointer mb-[30px]' onClick={toggleMenu}>
            <Link to={'/aboutus'} className="text-2xl">About Us</Link>
          </li>
           <li className='text-white cursor-pointer mb-[30px]' onClick={toggleMenu}>
            <Link to={'/blog'} className="text-2xl">Blog</Link>
          </li>
           <li className='text-white cursor-pointer mb-[30px]' onClick={toggleMenu}>
            <Link to={'/contact'} className="text-2xl">Contact</Link>
          </li>
          <button className="btn-2" onClick={toggleMenu}>Free trial</button>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar
