import React from 'react';
import BlogHeader from '../../components/blog-header';
import Footer from "../../components/footer"

const BlogPageLayout = ({children}) => {
  return (
    <>
      <BlogHeader />
      <div className="overlap"></div>
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default BlogPageLayout;