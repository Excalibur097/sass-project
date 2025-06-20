import React from 'react';
const featuresobj = [
  {
    header:'Advanced 256-bit\nencryption',
    image:'icons/featuresicon1.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio',
    para3:'ctetur adip'
  },
   {
    header:'Simple collaboration\ntools',
    image:'icons/featuresicon2.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio',
    para3:'ctetur adip'
  },
   {
    header:'Customizable AI\nfeatures',
    image:'icons/featuresicon3.svg',
    para1:'Lorem ipsum dolor sit amet conse',
    para2:'ctetur adipisicing elit. Delectus odio',
    para3:'ctetur adip'
  }
]


const Features2 = () => {
  return (
    <div className='px-[30px] md:px-[70px] mb-[100px] flex flex-col items-center justify-center text-center'>
      <h3 className='h3-bold mb-[30px]'>Features</h3>
      <div className='w-full flex lg:justify-around mb-[50px] flex-wrap bg-lightviolet px-[35px]
       py-[50px] rounded-[10px] justify-start gap-7'>
        {
          featuresobj.map((item,index)=>{
            return(
              <div key={index} className={`flex flex-col justify-start lg:px-7 text-start whitespace-pre-wrap ${index
                ===1? 'lg:border-l lg:border-r lg:border-gray-400': ''}`}>
                <img src={item.image} alt='icon' className='w-[48px] h-[48px] mb-10px'/>
                <h4 className='h4-bold mb-[20px]'>{item.header}</h4>
                <p className='text-sm'>{item.para1}</p>
                <p className='text-sm'>{item.para2}</p>
                <p className='text-sm'>{item.para3}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Features2
