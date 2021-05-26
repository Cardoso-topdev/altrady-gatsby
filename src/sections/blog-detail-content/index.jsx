import React from 'react';
import BlogListItem from '../../components/blog-list-item';

const BlogDetailContentSection = ({content, features}) => {
  const {
    title1,
    content1,
    title2,
    content2,
    title3,
    content3,
    title4,
    content4,
    title5,
    content5,
    quote,
    list1,
    list2
  } = content

  return (
    <div className="blog-detail-content row">
      <div className="col-lg-8">
        <h1 className="title">{title1}</h1>
        <p className="content color-secondary">{content1}</p>
        <h2 className="title">{title2}</h2>
        <p className="content color-secondary">{content2}</p>
        <h3 className="title">{title3}</h3>
        <p className="content color-secondary">{content3}</p>
        <h4 className="title">{title4}</h4>
        <p className="content color-secondary">{content4}</p>
        <h5 className="title">{title5}</h5>
        <p className="content color-secondary">{content5}</p>
        <p className="quote">{quote}</p>
        <div className="lists">
          <h3>Lists</h3>
          <ul className="list-type1">
            {list1.map( (item, idx) => (
              <li key={idx} className="d-flex"><p>{item}</p></li>
            ))}
          </ul>
          <ul className="list-type2">
            {list2.map((item, idx) => (
              <li key={idx}><p>{item}</p></li>
            ))}
          </ul>
        </div>
        <h3 className="image">Image</h3>
        <div className="img-container"></div>
      </div>
      <div className="col-lg-4">
        <h4 className="features-blogs tablet-hide">Features Blogs</h4>
        <div className="blogs-list tablet-hide">
          {features.map( (item, idx ) => (
            <BlogListItem {...item} key={idx}/>
          ))}
        </div>
        <div className="coindelist blog-detail"> </div>
      </div>
    </div>
  );
};

export default BlogDetailContentSection;