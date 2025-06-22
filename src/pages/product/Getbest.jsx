import React from 'react';
const getbestobj = [
  {
    header:'Security and privacy',
    image:'icons/securityicon.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  },
   {
    header:'Built in AI feature',
    image:'icons/aiicon.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  },
   {
    header:'Collaborate with others',
    image:'icons/colaboicon.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  },
   {
    header:'Real time sync',
    image:'icons/syncicon.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  },
   {
    header:'Built in AI feature',
    image:'icons/nlpicon.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  },
   {
    header:'Easy notes organisation',
    image:'icons/organiseicon.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  },
]


const Getbest = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-full bg-lightviolet py-[80px] text-center mb-[80px] mt-[50px]'>
        <h2 className='h3-bold'>Get the best out of your company <br /> with our services</h2>
      </div>

      <div className='px-[30px] md:px-[70px] mb-[50px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          getbestobj.map((item)=>{
            return(
              <div className='flex flex-col justify-start text-start whitespace-pre-wrap mb-[30px]'>
                <img src={item.image} alt='icon' className='w-[48px] h-[48px] mb-[20px]'/>
                <h5 className='h5-bold mb-[10px]'>{item.header}</h5>
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

export default Getbest
