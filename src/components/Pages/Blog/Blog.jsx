import blog from '../../../assets/blogs.png';
import blogs2 from '../../../assets/blogs2.png';
import blogs3 from '../../../assets/blogs3.png';
import "./Blog.css"
import React from 'react';

const Blog = () => {
  return (
    
    <div className="blog">
    <div className="blog-tittle">
     
     <h1>BLOQ</h1>
     <div className="styles">
      <div className='style'>
      <img src={blog} alt="blog_img" />
      <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
      
      
      </div>
     <div className='style'>
     <img src={blogs2} alt="blogs2_img" />
     
     <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
     
     </div>
     <div className='style'>
     <img src={blogs3} alt="blogs3_img" />
     <span>İlk dəfə yeyənlər üçün dadlı 10 suşi növü</span>
     
     </div>
     
     </div>
    </div>
  </div>

      
    
  )
}

export default Blog
