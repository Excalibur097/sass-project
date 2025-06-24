import React from 'react';
const valuesObj = [
  {
    header:'Best in class',
    image:'icons/likeicon.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  },
   {
    header:'Authenticity',
    image:'icons/authenticity.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  },
   {
    header:'Email support',
    image:'icons/emailsupport.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  },
   {
    header:'Discounts available',
    image:'icons/discount.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  },
   {
    header:'Powerful marketing',
    image:'icons/marketing.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  },
   {
    header:'Inventory management',
    image:'icons/inventory.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio'
  },
]

const Values = () => {
  return (
    <div className='px-[30px] md:px-[70px] mb-[100px] flex flex-col items-center'>
      <h3 className='h3-bold mb-[30px]'>Our corporate values</h3>
      <p className='mb-[30px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odio deserun
      </p>

      <div className='bg-lightviolet flex justify-between flex-wrap px-[30px] md:px-[70px] pt-[40px]
      rounded-[15px]'>
        {
          valuesObj.map((item)=>{
            return(
              <div className='flex flex-col justify-start text-start whitespace-pre-wrap mb-[50px]
              lg:w-1/3 md:w-1/2'>
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

export default Values
