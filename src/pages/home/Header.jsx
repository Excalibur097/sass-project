import React from 'react'

const Header = () => {
  return (
    <div className='px-[30px] md:px-[70px] flex flex-col justify-center items-center text-center mb-[100px]'>
      <h1 className='h2-bold md:h1-bold mb-[30px]'>The Best Software to Grow <br /> your Sales and Services</h1>
      <p className='mb-[30px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odio deserunt ut est, <br />
        accusantium, velit placeat aliquid nulla rem sunt veritatis dolorum 
      </p>
      <div className='flex gap-0 bg-lightviolet p-[5px] rounded-[12px] mb-[30px]'>
        <input type="text" placeholder='Enter your Email' className='bg-lightviolet rounded[12px]
        w-[150px] md:w-[300px] p-[5px] rounded-[12px]'/>
        <button className='btn-1 px-[20px]'>Get Free trial</button>
      </div>
      <img src="images/dashboard1.png" alt="Dashboard image" className='w-[300px] md:w-[600px] lg:w-[1000px]' />
    </div>
  )
}

export default Header
