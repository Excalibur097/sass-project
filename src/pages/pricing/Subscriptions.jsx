import React, { useState } from 'react';

const pricing = [
  {
    title:'Regular',
    funcpar:'regular',
    sub:'Starter Plan',
    pros:[
      'Limited Projects',
      'Regular Support Business',
      '1 Month Free Trial',
      '3GB Storage',
      'Ads Preview'
    ],
    price:'Free',
    length:'For Limited Period'
  },
  {
    title:'Platinum',
    funcpar:'platinum',
    sub:'For the best results',
    pros:[
      'Unlimited Projects',
      'Regular Support Business',
      '2 Months Free Trial',
      '20GB Storage',
      'Ads Preview'
    ],
    price:'$342',
    length:'For Limited Period'
  },
  {
    title:'Standard',
    funcpar:'standard',
    sub:'Most Popular',
    pros:[
      'Limited Projects',
      'Regular Support Business',
      '1 Month Free Trial',
      '10GB Storage',
      'Ads Preview'
    ],
    price:'$230',
    length:'For Limited Period'
  }
]

const Subscriptions = () => {
  const [selectSub, setSelectsub] = useState('platinum');

  const toggleSub =(funcpar)=>{
    setSelectsub(funcpar);
  }

  return (
    <div className='px-[30px] md:px-[70px] mb-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        pricing.map((item)=>{
          return(
            <div className={`flex flex-col ${selectSub ===item.funcpar?'bg-lightviolet border-2 border-blue':'bg-white'}
            m-[30px] rounded-[15px] shadow-lg cursor-pointer`} onClick={()=>toggleSub(item.funcpar)}>
              <div className="flex justify-start items-center gap-2 mb-[40px] mt-[40px] ml-[40px]">
                <img src={`icons/${item.funcpar}.svg`} alt="" />
                <div className='flex flex-col items-start'>
                  <h4 className='h4-bold'>{item.title}</h4>
                  <p className='text-sm text-gray-600'>{item.sub}</p>
                </div>
              </div>
              <div className='w-full bg-gray-300 h-[1px] mb-[30px]'></div>
              <div className='mb-[10px] ml-[40px]'>
                {
                  item.pros.map((item1)=>{
                    return(
                      <div className='flex gap-[7px] mb-[20px] '>
                        <img src="icons/regularcheck.svg" alt="check" />
                        <p>{item1}</p>
                      </div>
                    )
                  })
                }
              </div>
              <div className='text-center mb-[30px]'>
               <p className='text-xs'>
                  Lorem ipsum dolor sit amet consectetur <br/>
                  distinctio provident fuga
                </p>
              </div>
              <div className='flex flex-col items-center text-center mb-[30px]'>
                <h4 className='h4-bold'>{item.price}</h4>
                <p className='text-[11px] text-gray-500 mb-[20px]'>{item.length}</p>
                <button className='btn-1 '>Get started</button>
              </div>
             
            </div>
          )
        })
      }
    </div>
  )
}

export default Subscriptions
