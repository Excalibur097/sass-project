import React from 'react';
const contactObj = [
  {
    image:'icons/phone.svg',
    conatct:'+ 1800 145 276',
    title: 'Free support'
  },
    {
    image:'icons/helpemail.svg',
    conatct:'finsweet@gmail.com',
    title: 'Help Email support'
  },
    {
    image:'icons/enquiryemail.svg',
    conatct:'sales.finsweet.com',
    title: 'Sales Enquiry'
  },
]

const Headerc = () => {
  return (
    <div className='px-[30px] md:px-[70px] flex flex-col justify-center items-center mb-[100px]
    mt-[50px]'>
      <h1 className='h2-bold md:h1-bold mb-[60px] mt-[20px]'>Get in touch with us</h1> 
      <div className='flex flex-col items-start text-start bg-lightviolet w-full py-[60px] px-[30px]
      lg:px-[70px] rounded-[15px]'>
        <h5 className='h3-bold mb-[20px]'>Drop us a message</h5>
        <p className='mb-[20px]'>We will get back to you as soon as possible</p>
        <div className='flex flex-col  lg:flex-row lg:justify-between w-full'>
          <div className='flex flex-col mb-[50px] lg:w-[50%]'>
            <div className='flex flex-col md:flex-row gap-3 mb-[20px] '>
              <input type="text" placeholder='Full Name' className='bg-white py-[10px] px-[10px]
              rounded-[10px] text-sm w-[100%] '/>
              <input type="text" placeholder='Company Name' className='bg-white py-[10px] px-[10px]
              rounded-[10px] text-sm w-[100%]'/>
            </div>
            <input type="text" placeholder='Work Email' className='bg-white py-[10px] px-[10px] rounded-[10px]
            mb-[20px] md:w-auto text-sm'/>
            <input type="text" placeholder='Subject' className='bg-white py-[10px] px-[10px] rounded-[10px]
            mb-[20px] md:w-auto text-sm'/>
            <input type="text" placeholder='Message' className='bg-white py-[10px] px-[10px] rounded-[10px]
            mb-[20px] md:w-auto text-sm pb-[60px]'/>
            <button className='btn-1'>Submit</button>
          </div>
          <div className='flex-flex-col'>
            {
              contactObj.map((item)=>{
                return(
                  <div className='flex items-center gap-2 mb-[40px] '>
                    <img src={item.image} alt="" />
                    <div className='flex flex-col'>
                      <h4 className='h4-bold'>{item.conatct}</h4>
                      <p className='text-sm text-gray-500'>{item.title}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headerc
