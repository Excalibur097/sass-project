import React from 'react';
import { Link } from 'react-router-dom';

const Grow = () => {
  return (
    <div className='px-[30px] md:px-[70px] flex flex-col justify-center items-center text-center mb-[100px]'>
      <h1 className='h2-bold md:h1-bold mb-[30px]'>Are you ready to grow your<br/>business with us</h1>
      <p className='mb-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
      <Link to={'/pricing'}><button className='btn-1'>View Pricing</button></Link>
      
    </div>
  )
}

export default Grow
