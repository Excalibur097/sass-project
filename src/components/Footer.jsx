import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-primary px-[30px] md:px-[70px] py-[60px] flex flex-col text-white'>
      <div className='flex justify-between items-start flex-wrap mb-[30px]'>
        <div className='flex flex-col mb-[20px]'>
          <h5 className='h5-bold mb-[10px]'>Company</h5>
          <p className='mb-[10px] text-sm'>About Us</p>
          <p className='mb-[10px] text-sm'>Why Choose us</p>
          <p className='mb-[10px] text-sm'>Pricing</p>
          <p className='mb-[10px] text-sm'>Testimonial</p>
        </div>
         <div className='flex flex-col mb-[20px]'>
          <h5 className='h5-bold mb-[10px]'>Reesources</h5>
          <p className='mb-[10px] text-sm'>Privacy Policy</p>
          <p className='mb-[10px] text-sm'>Terms and Conditions</p>
          <p className='mb-[10px] text-sm'>Blog</p>
          <p className='mb-[10px] text-sm'>Contact Us</p>
        </div>
         <div className='flex flex-col mb-[20px]'>
          <h5 className='h5-bold mb-[10px]'>Product</h5>
          <p className='mb-[10px] text-sm'>Project management</p>
          <p className='mb-[10px] text-sm'>Time tracker</p>
          <p className='mb-[10px] text-sm'>Time schedule</p>
          <p className='mb-[10px] text-sm'>Lead generate</p>
          <p className='mb-[10px] text-sm'>Remote collections</p>
        </div>
        <div className='flex flex-col items-start'>
          <h4 className='h4-bold mb-[30px]'>Finsweet</h4>
          <h5 className='h5-bold mb-[10px]'>Subscribe to our Newsletter</h5>
          <div className='flex gap-0 bg-[#2B2E3C] p-[5px] rounded-[12px] '> 
            <input type="text" placeholder='Enter your Email' className='bg-[#2B2E3C] text-sm w-[150px]
            md:w-[250px] rounded-[12px] p-[5px] focus:border-none'/>
            <button className='btn-3'>Submit</button>
          </div>
        </div>
      </div>

      <div className='flex justify-between items-center'>
        <div className='w-0 md:flex flex-col md:w-[20%] lg:w-[33%]'>
          <div className='bg-transparent w-full'></div>
          <div className='w-full bg-white h-[1px]'></div>
          <div></div>
        </div>
        <div className='flex gap-[15px] items-center'>
          <p className='text-xs'>@ Copyright finsweet 2025</p>
          <img src="icons/footer1.svg " alt="facebook-logo" />
          <img src="icons/footer2.svg " alt="twitter-logo" />
          <img src="icons/footer3.svg " alt="instagram-logo" />
          <img src="icons/footer4.svg " alt="linkedin-logo" />
        </div>
         <div className='w-0 md:flex flex-col md:w-[20%] lg:w-[33%] '>
          <div className='bg-transparent w-full'></div>
          <div className='bg-white w-full h-[1px]'></div>
          <div className='bg-transparent w-full'></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
