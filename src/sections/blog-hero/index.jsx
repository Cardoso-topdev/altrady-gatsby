import React from 'react'
import BlogItem from '../../components/blog-item'

const BlogHeroSection = ({blogData, categories}) => {
  return (
    <div className="blog-section section-hero blog-item-container">
      <div className="row">
        <div className="part-one d-flex col-lg-9 col-sm-12 row">
          <div className="col-lg-4 col-sm-12 row m-0 p-0">
            <div className="col-lg-12 col-sm-6 col-6 p-1">
              <BlogItem {...blogData[1]} categories={categories} size={"small "} />
            </div>
            <div className="col-lg-12 col-sm-6 col-6 p-1">
              <BlogItem {...blogData[2]} categories={categories} size={"small "} />
            </div>
          </div>
          <div className="col-lg-8 col-sm-12">
            <BlogItem {...blogData[0]} categories={categories} size={"large "} />
          </div>
        </div>
        <div className="part-two row col-lg-3 col-sm-12">
          <div className="col-lg-12 col-sm-6 col-6 p-1">
            <BlogItem {...blogData[3]} categories={categories} size={"small "} />
          </div>
          <div className="col-lg-12 col-sm-6 col-6 p-1">
            <BlogItem {...blogData[4]} categories={categories} size={"small "} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogHeroSection