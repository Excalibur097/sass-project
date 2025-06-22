import React, { useState } from 'react';


const Headerp = () => {
  const [monthly, setMonthly] = useState(false);

  const toggleMonthly = ()=>{
    setMonthly(!monthly);
  }

  return (
    <div className='px-[30px] md:px-[70px] flex flex-col justify-center items-center text-center mb-[100px]
    mt-[50px]'>
      <h1 className='h2-bold md:h1-bold mb-[30px]'>Pricing plans that <br /> suit you</h1> 
      <p className='mb-[30px]'>
        Lorem ipsum dolor sit amet consectetur adipisicing <br/>
        distinctio provident fuga, inventore corrupti ullam
      </p>

      <div className='flex gap-4 p-[5px] bg-lightviolet rounded-[12px]'>
        <h5 className={`h6-bold py-[10px] px-[15px] rounded-[12px] ${monthly? 'bg-primary text-white'
        :''} cursor-pointer`} onClick={toggleMonthly}>
          Monthly
        </h5>

        <h5 className={`h6-bold py-[10px] px-[15px] rounded-[12px] ${!monthly? 'bg-primary text-white':''}
        cursor-pointer`} onClick={toggleMonthly}>
          Yearly
        </h5>
      </div>
    </div>
  )
}

export default Headerp
