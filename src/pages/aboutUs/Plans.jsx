import React from 'react'

const Plans = () => {
  return (
    <div className='px-[30px] md:px-[70px] mb-[100px] bg-lightviolet flex items-center lg:items-start
    pt-[50px] justify-between flex-wrap'>
      <div className='flex flex-col'>
        <h3 className='label font-bold mb-[30px]'>Our Goals</h3>
        <h2 className='h3-bold lg:h2-bold mb-[30px]'>To upscale your business <br /> to the next level</h2>
        <p className='mb-[40px] text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Delectus odio deserunt ut est,
          accusantium, velit plac <br /> eat aliquid nulla rem sunt veritatis dolorum 
        </p>
      </div>

      <div className='flex flex-col'>
        <h3 className='label font-bold mb-[30px]'>Our Vision</h3>
        <h2 className='h3-bold lg:h2-bold mb-[30px]'>To provide solutions for <br/>growing companies</h2>
        <p className='mb-[40px] text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Delectus odio deserunt ut est,
          accusantium, velit plac <br /> eat aliquid nulla rem sunt veritatis dolorum 
        </p>
      </div>
    </div>
  )
}

export default Plans
