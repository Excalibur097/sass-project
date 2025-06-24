import React from 'react'

const Headera = () => {
  return (
    <div className='px-[30px] md:px-[70px] mt-[50px] flex flex-col justify-center items-center text-cenert mb-[100px]'>
      <h1 className='h2-bold md:h1-bold mb-[30px]'>We are proud of our products</h1>
      <p className='mb-[30px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus odio deserunt ut est, <br />
        accusantium, velit placeat aliquid nulla rem sunt veritatis dolorum 
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <img src="images/aboutus1.png" alt="about us"/>
        <img src="images/aboutus2.png" alt="about us"/>
        <img src="images/aboutus3.png" alt="about us"/>
      </div>
    </div>
  )
}

export default Headera
