import React from 'react';
const posts = [
  {
    image:'images/blog1.png',
    topic: '7 Automation cases that foster excellent CX',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Delectus odio deserunt ut est, 
      accusantium, velit placeat aliquid nulla rem
      `,
    author:'Luke Mathews | November 8, 2021'
  },
    {
    image:'images/blog2.png',
    topic: 'Managing rails application secret with encrypted crydentials',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Delectus odio deserunt ut est, 
      accusantium, velit placeat aliquid nulla rem
      `,
    author:'Luke Mathews | November 8, 2021'
  },
    {
    image:'images/blog1.png',
    topic: 'Account-based Marketing: Data Driven Selection for ABM success',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Delectus odio deserunt ut est,
      accusantium, velit placeat aliquid nulla rem
      `,
    author:'Luke Mathews | November 8, 2021'
  },
    {
    image:'images/blog4.png',
    topic: 'How to Calculate your SaaS Gross Margin',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Delectus odio deserunt ut est, 
      accusantium, velit placeat aliquid nulla rem
      `,
    author:'Luke Mathews | November 8, 2021'
  },
    {
    image:'images/blog5.png',
    topic: 'The five main benefits of Automating your Accounts Receivable Process',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Delectus odio deserunt ut est,
      accusantium, velit placeat aliquid nulla rem
      `,
    author:'Luke Mathews | November 8, 2021'
  },
    {
    image:'images/blog6.png',
    topic: 'How to Make Data-driven Pricing Decisions',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Delectus odio deserunt ut est, 
      accusantium, velit placeat aliquid nulla rem
      `,
    author:'Luke Mathews | November 8, 2021'
  },
    {
    image:'images/blog7.png',
    topic: 'How to make Recurring Invoicing more Efficient',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Delectus odio deserunt ut est,
      accusantium, velit placeat aliquid nulla rem
      `,
    author:'Luke Mathews | November 8, 2021'
  },
    {
    image:'images/blog8.png',
    topic: 'How to reduce checkout Abandonment for more Conversions',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Delectus odio deserunt ut est,
      accusantium, velit placeat aliquid nulla rem
      `,
    author:'Luke Mathews | November 8, 2021'
  },
    {
    image:'images/blog9.png',
    topic: '10 Customer Retention Strategies for better Downwell',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Delectus odio deserunt ut est,
      accusantium, velit placeat aliquid nulla rem
      `,
    author:'Luke Mathews | November 8, 2021'
  }
]

const Posts = () => {
  return (
    <div className='px-[30px] md:px-[70px] mb-[100px] flex flex-col items-center'>
      <h1 className='h2-bold md:h1-bold mb-[30px]'>All posts</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {
          posts.map((item, index)=>{
            return(
              <div key={index} className='flex flex-col'>
                <img src={item.image} alt={item.topic} className='mb-[20px]' />
                <h5 className='h5-bold mb-[20px]'>{item.topic}</h5>
                <p className='mb-[20px] text-sm'>{item.content}</p>
                <p className=''>{item.author}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Posts
