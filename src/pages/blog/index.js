import React from 'react';
import BlogPageLayout from '../../layouts/BlogPageLayout';
import BlogHeroSection from '../../sections/blog-hero';
import BlogList1 from '../../sections/blog-list1';
import BlogList2 from '../../sections/blog-list2';
import { graphql } from 'gatsby'

const Blog = ({data}) => {
  const blogData = data.allPrismicBlogPost.nodes
  const blogHeaderData = blogData.slice(0,5)

  const categories = data.allPrismicBlogCategory.nodes
  return (
    <BlogPageLayout>
      <div className="layout-container">
        <BlogHeroSection blogData={blogHeaderData} categories={categories}/>
        <div className="coindelist">
        </div>
        <BlogList1 blogData={blogData} categories={categories}/>
        <div className="trading-mode"></div>
        <BlogList2 blogData={blogData} categories={categories}/>
      </div>
    </BlogPageLayout>
  );
};

export const query = graphql`
query Blog {
  allPrismicBlogCategory {
    nodes {
      data {
        category_color
        meta_title
        meta_keywords
        meta_description
        image {
          url
        }
        category_slug
        category_name
      }
      prismicId
    }
  }
  allPrismicBlogPost(
    sort: {order: DESC, fields: data___date}
  ) {
    nodes {
      data {
        banner
        category {
          id
        }
        content
        cover_image {
          url
        }
        date
        featured
        homepage
        meta_description
        meta_keywords
        meta_title
        slug
        summary
        thumbnail {
          url
        }
        title
        trending
      }
    }
  }
}
`

export default Blog;