import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='px-[30px] md:px-[70px] mb-[100px] flex justify-between items-center flex-col lg:flex-row mt-[50px]
    lg:justify-between'>
        <div className='flex flex-col justify-start mb-[30px]'>
          <h2 className='h3-bold lg:h2-bold mb-[30px]'>Grow your sales and<br/>services</h2>
          <p className='mb-[40px] text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Delectus odio deserunt ut est,
            accusantium, velit plac <br /> eat aliquid nulla rem sunt veritatis dolorum 
          </p>
          <div className='flex-col md:flex-row justify-between'>
            <Link to={'/pricing'}><button className='btn-1 w-[200px] mb-4 mr-3'>Get free trial</button></Link>
            <Link to={'/contact'}><button className='btn-2 w-[200px]'>Contact us</button></Link>
          </div>
        </div>
        <img src="/images/productdashboard.png" alt="dashboard" className='w-[400px] md:w-[600px]'/>
    </div>
  )
}

export default Dashboard
