import React from 'react';
import { useState } from 'react';

const accordionData = [
  { title: 'How do I grow my business?', content: 'Lorem ipsum dolor sit amet consectetur a odio deserunt ut est,aliquid nulla rem sunt veritatis' },
  { title: 'Can I cancel my subscription?', content: 'Lorem ipsum dolor sit amet consectetur a odio deserunt ut est,aliquid nulla rem sunt veritatis'},
  { title: 'How do I contact the support?', content: 'Lorem ipsum dolor sit amet consectetur a odio deserunt ut est,aliquid nulla rem sunt veritatis'},
  { title: 'Is a credit card recquired', content: 'Lorem ipsum dolor sit amet consectetur a odio deserunt ut est,aliquid nulla rem sunt veritatis'},
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='px-[30px] md:px-[70px] mb-[100px]'>
      <div className='flex flex-col justify-start lg:flex-row lg:justify-between px-[35px] py-[40px] 
      bg-lightviolet rounded-[15px]'>
        <div className='flex flex-col'>
          <h2 className='h3-bold lg:h2-bold mb-[30px]'>Frequently Asked<br/>Questions</h2>
          <p className='mb-[40px] text-sm'>
            Lorem ipsum dolor sit amet consectetur a odio deserunt ut est,
            accusantium, velit plac <br /> eat aliquid nulla rem sunt veritatis dolorum 
          </p>
        </div>
        <div className="w-[100%] lg:w-[45%]  mt-4">
        {accordionData.map((item, index) => (
            <div key={index} className="mb-4 border rounded-lg shadow-sm flex flex-col">
              <button
                className={`w-full px-4 py-[30px] rounded-[12px] text-left bg-white focus:outline-none
                flex justify-between items-center ${activeIndex === index? 'rounded-b-none':''}`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium">{item.title}</span>
                <span className="text-xl">
                  {activeIndex === index ? '-' : '+'}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-out ${
                  activeIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 py-3 rounded-[12px] rounded-t-none bg-white">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs
