import React from 'react';

const testimonials = [
  {
    para1:'Lorem ipsum dolor sit amet',
    para2:'consectetur adipisicing' ,
    para3: 'elit. Delectus odio deserunt ut est',
    para4: 'accusantium, velit plac',
    para5: 'eat aliquid nulla rem',
    image:'/images/customer1.png',
    name:'Ron Wood',
    rank:'CEO'
  },
    {
    para1:'Lorem ipsum dolor sit amet',
    para2:'consectetur adipisicing' ,
    para3: 'elit. Delectus odio deserunt ut est',
    para4: 'accusantium, velit plac',
    para5: 'eat aliquid nulla rem',
    image:'/images/customer2.png',
    name:'Mark Mason',
    rank:'Marketing Manager'
  },
    {
    para1:'Lorem ipsum dolor sit amet',
    para2:'consectetur adipisicing' ,
    para3: 'elit. Delectus odio deserunt ut est',
    para4: 'accusantium, velit plac',
    para5: 'eat aliquid nulla rem',
    image:'/images/customer3.png',
    name:'Sam Preston',
    rank:'CTO'
  },
]

const Testimonials = () => {
  return (
    <div className='px-[30px] md:px-[70px] mb-[100px] flex flex-col justify-center text-center'>
      <h3 className='h3-bold mb-[30px]'>The stunning results our <br />customers have experinced</h3>
      <div className='flex justify-center gap-[50px] flex-wrap'>
        {
          testimonials.map((item)=>{
            return(
              <div className='flex flex-col items-center border border-lightviolet rounded-[16px]
              p-[30px] md:p-[60px]'>
                <p>{item.para1}</p>
                <p>{item.para2}</p>
                <p>{item.para3}</p>
                <p>{item.para4}</p>
                <p className='mb-[20px]'>{item.para5}</p>
                <img src={item.image} alt={item.name} />
                <h5 className='h5-bold'>{item.name}</h5>
                <p>{item.rank}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Testimonials
