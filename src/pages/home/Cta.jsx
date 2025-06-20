import React from 'react'

const Cta = () => {
  return (
    <div className='bg-lightviolet py-[50px] mb-[60px]'>
      <div className='px-[30px] md:px-[70px] flex justify-between items-center flex-wrap'>
        <div className='flex flex-col justify-start mb-[30px]'>
          <h2 className='h3-bold lg:h2-bold mb-[30px]'>More impressions, more <br />conversions</h2>
          <p className='mb-[40px] text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Delectus odio deserunt ut est,
            accusantium, velit plac <br /> eat aliquid nulla rem sunt veritatis dolorum 
          </p>
          <button className='btn-1 w-[200px]'>Get free trial</button>
        </div>
        <img src="/images/leadgeneration.png" alt="" />
      </div>
    </div>
  )
}

export default Cta
