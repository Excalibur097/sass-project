import React from 'react';
import Headerb from './Headerb'
import Trendingpost from './Trendingpost';
import Posts from './Posts';
import Grow from '../home/Grow';

const Blogs = () => {
  return (
    <div>
      <Headerb/>
      <Trendingpost/>
      <Posts/>
      <Grow/>
    </div>
  )
}

export default Blogs
