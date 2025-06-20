import React from 'react'
import Header from './Header'
import Features from './Features'
import Whyus from './Whyus'
import Cta from './Cta'
import Logos from './Logos'
import Discovermore from './Discovermore'
import Features2 from './Features2'
import Testimonials from './Testimonials'
import Grow from './Grow'

const Home = () => {
  return (
    <div className='mt-[50px]'>
      <Header/>
      <Features/>
      <Whyus/>
      <Cta/>
      <Logos/>
      <Discovermore/>
      <Features2/>
      <Testimonials/>
      <Grow/>
    </div>
  )
}

export default Home
