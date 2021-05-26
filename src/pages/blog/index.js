import React from 'react';
import BlogPageLayout from '../../layouts/BlogPageLayout';
import BlogHeroSection from '../../sections/blog-hero';
import BlogList1 from '../../sections/blog-list1';
import BlogList2 from '../../sections/blog-list2';

const Blog = () => {
  return (
    <BlogPageLayout>
      <div className="layout-container">
        <BlogHeroSection />
        <div className="coindelist">
        </div>
        <BlogList1 />
        <div className="trading-mode"></div>
        <BlogList2 />
      </div>
    </BlogPageLayout>
  );
};

export default Blog;