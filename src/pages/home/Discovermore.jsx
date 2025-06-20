import React from 'react';

const discoverobj = [
  {
    image:'icons/salestracking.svg',
    para:'Lorem ipsum dolor sit amet consectetur adipisicing\nelit. Delectus'
  },
   {
    image:'icons/featureicon.svg',
    para:'Lorem ipsum dolor sit amet consectetur adipisicing\nelit. Delectus'
  },
   {
    image:'icons/activityreport.svg',
    para:'Lorem ipsum dolor sit amet consectetur adipisicing\nelit. Delectus'
  }
]

const Discovermore = () => {
  return (
    <div className='px-[30px] md:px-[70px] mb-[100px] flex items-center lg:items-start justify-between flex-wrap'>
      <div className='flex flex-col'>
        <h3 className='label font-bold mb-[30px]'>Discover more</h3>
        <h2 className='h3-bold lg:h2-bold mb-[30px]'>Analyze your sales and<br />marketing leads</h2>
        <p className='mb-[40px] text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Delectus odio deserunt ut est,
          accusantium, velit plac <br /> eat aliquid nulla rem sunt veritatis dolorum 
        </p>
      </div>
      <div className='flex flex-col'> 
        {
          discoverobj.map((item)=>{
            return(
              <div className='flex justify-start mb-[50px] items-center gap-[10px] whitespace-pre-wrap'>
                <img src={item.image} alt="" />
                <p className='text-sm'>{item.para}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Discovermore
