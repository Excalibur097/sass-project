import React from 'react'
const logos = [
  'images/logo1.png',
  'images/logo2.png',
  'images/logo3.png',
  'images/logo4.png',
  'images/logo5.png',
]

const Logos = () => {
  return (
    <div className='px-[30px] md:px-[70px] mb-[70px] flex justify-between overflow-x-auto flex-nowrap gap-4'>
      {
        logos.map((item)=>{
          return(
            <img src={item} alt="" />
          )
        })
      }
    </div>
  )
}

export default Logos
