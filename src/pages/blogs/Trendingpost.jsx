import React from 'react'

const Trendingpost = () => {
  return (
    <div className='px-[30px] md:px-[70px] mb-[100px] flex items-center lg:items-center justify-between
    flex-wrap'>
      <div className='flex flex-col'>
        <h3 className='label font-bold mb-[30px]'>Trending Post</h3>
        <h2 className='h3-bold lg:h2-bold mb-[30px]'>New invoicing features to <br />help you get paid faster</h2>
        <p className='mb-[40px] text-sm'>
          Over the past few months we've added several new features to SaaS  <br />
          Invoicing to help any business get paid faster and streamline with their collection workflows
        </p>
        <p className='mb-[30px]'>Luke Mathews | November 8, 2021 </p>
      </div>
      <img src="images/blogmain.png" alt="track team" className='lg:w-[600px]'/>
    </div>
  )
}

export default Trendingpost
