import React from 'react';
import BlogPost from '../components/blog';
import FeaturedPost from '../components/featured-post';
import { blogH } from '../images';

const Blog = () => {
  return (
    <div>
      <FeaturedPost heading={'Step-by-step guide to choosing great font pairs'}
        authorName={'John Doe'}
        publishedDate={'May 23, 2022'}
        description={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'}
        img={blogH}
        /> 
      <BlogPost />
    </div>
  )
}

export default Blog
