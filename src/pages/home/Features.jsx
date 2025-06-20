import React from 'react'
const featuresobj = [
  {
    header:'High security to protect\nfrom piracy',
    image:'icons/shieldicon.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  },
   {
    header:'Premium quality\nperformance',
    image:'icons/likeicon.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  },
   {
    header:'Full time customer\nsupport-24/7',
    image:'icons/headphoneicon.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  }
]

const Features = () => {
  return (
    <div className='px-[30px] md:px-[70px] mb-[100px] flex flex-col items-center justify-center text-center'>
      <h3 className='label font-bold mb-[30px]'>High quality</h3>
      <h3 className='h3-bold mb-[30px]'>We have the Best Solution <br /> for your Business</h3>
      <div className='w-full flex lg:justify-around mb-[50px] flex-wrap bg-lightviolet px-[35px]
      py-[50px] rounded-[10px] justify-start gap-7'>
        {
          featuresobj.map((item)=>{
            return(
              <div className='flex flex-col  justify-start text-start whitespace-pre-wrap'>
                <img src={item.image} alt='icon' className='w-[48px] h-[48px] mb-10px'/>
                <h4 className='h4-bold mb-[20px]'>{item.header}</h4>
                <p className='text-sm'>{item.para1}</p>
                <p className='text-sm'>{item.para2}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Features
