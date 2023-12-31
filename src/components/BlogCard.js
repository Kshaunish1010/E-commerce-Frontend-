import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = () => {
    return (
        <div className='blog-card'>
            <div className='card-images'>
                <img src="images/blog-1.jpg" className='img-fluid w-100' alt='blog' />
            </div>
            <div className="blog-content">
                <p className='date'>1 Dec, 2022</p>
                <h5 className='title'>A beautiful Sunday morning renaissance</h5>
                <p className='desc'>Loreoofmdscmovfmo
                    sdmvmoidnmjmjiksgsmndjiomnjkkgmokmgboksmokmok mewmkomo ejoriorjaoimnofmnasdmnkc mokomksadl
                </p>
                <Link to="/blogs/:id" className='button'>Read More</Link>
            </div>
        </div>
    )
}

export default BlogCard