import React from 'react';
import BlogPageLayout from '../../layouts/BlogPageLayout';
import BlogDetailContentSection from '../../sections/blog-detail-content';
import BlogDetailHero from '../../sections/blog-detail-hero';
import BlogDetailList from '../../sections/blog-detail-list';
import { BlogHeader, BlogImg } from "../../utils/imgLoader"

const blogDetailHeroData = {
  title: `Algorithmic Crypto Trading`,
  date: `May 6, 2021`,
  type: `Crypto Strategy`,
  typeColor: `red`,
  imgSrc: BlogHeader
}
const blogDetailContentData = {
  title1: `H1 heading`,
  content1: `Condimentum penatibus fermentum porttitor vestibulum feugiat sit dui. Magnis at nisl elit leo nam. Egestas semper velit mattis aenean adipiscing. Pellentesque laoreet lectus in ipsum amet molestie cum elementum. Blandit tortor, adipiscing nunc dolor aliquet. Justo, ac eu fringilla et viverra. Nec velit, sit condimentum eget vel, proin. Cras justo, vestibulum lacinia mauris arcu ac volutpat volutpat pellentesque. Ultrices facilisis elit orci elit quisque suspendisse.

Donec est volutpat ornare ultrices nunc, purus. In luctus tristique varius curabitur. Elementum sed sagittis, ultrices eget libero, pulvinar. Dictum nullam viverra cursus libero tempus urna commodo fermentum. Pharetra ut pretium, lectus fermentum cras lobortis at facilisis id.`,
title2: `H2 heading`,
content2: `Condimentum penatibus fermentum porttitor vestibulum feugiat sit dui. Magnis at nisl elit leo nam. Egestas semper velit mattis aenean adipiscing. Pellentesque laoreet lectus in ipsum amet molestie cum elementum. Blandit tortor, adipiscing nunc dolor aliquet. Justo, ac eu fringilla et viverra. Nec velit, sit condimentum eget vel, proin. Cras justo, vestibulum lacinia mauris arcu ac volutpat volutpat pellentesque. Ultrices facilisis elit orci elit quisque suspendisse.`,
title3: `H3 heading`,
content3: `Condimentum penatibus fermentum porttitor vestibulum feugiat sit dui. Magnis at nisl elit leo nam. Egestas semper velit mattis aenean adipiscing. Pellentesque laoreet lectus in ipsum amet molestie cum elementum. Blandit tortor, adipiscing nunc dolor aliquet. Justo, ac eu fringilla et viverra. Nec velit, sit condimentum eget vel, proin. Cras justo, vestibulum lacinia mauris arcu ac volutpat volutpat pellentesque. Ultrices facilisis elit orci elit quisque suspendisse.`,
title4: `H4 heading`,
content4: `Condimentum penatibus fermentum porttitor vestibulum feugiat sit dui. Magnis at nisl elit leo nam. Egestas semper velit mattis aenean adipiscing. Pellentesque laoreet lectus in ipsum amet molestie cum elementum. Blandit tortor, adipiscing nunc dolor aliquet. Justo, ac eu fringilla et viverra. Nec velit, sit condimentum eget vel, proin. Cras justo, vestibulum lacinia mauris arcu ac volutpat volutpat pellentesque. Ultrices facilisis elit orci elit quisque suspendisse.`,
title5: `H5 heading`,
content5: `Condimentum penatibus fermentum porttitor vestibulum feugiat sit dui. Magnis at nisl elit leo nam. Egestas semper velit mattis aenean adipiscing. Pellentesque laoreet lectus in ipsum amet molestie cum elementum.`,
quote: `Quote block. 

Condimentum penatibus fermentum porttitor vestibulum feugiat sit dui. Magnis at nisl elit leo nam. Egestas semper velit mattis aenean adipiscing. Pellentesque laoreet lectus in ipsum amet molestie cum elementum. `,
list1: [
  `Tortor auctor vestibulum aliquam velit nulla amet, vestibulum.`,
  `Bunc id tincidunt duis faucibus urna adipiscing.`,
  `Volutpat, eu lectus tortor quisque sed malesuada.`
],
list2: [
  `Tortor auctor vestibulum aliquam velit nulla amet, vestibulum.`,
  `Bunc id tincidunt duis faucibus urna adipiscing.`,
  `Volutpat, eu lectus tortor quisque sed malesuada.`
]
}
const featuresBlogData = [
  {
    title: `Should you buy Ethereum in 2021? ETH Buying Research `,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Should you buy Ethereum in 2021? ETH Buying Research `,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Should you buy Ethereum in 2021? ETH Buying Research `,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Should you buy Ethereum in 2021? ETH Buying Research `,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  },
  {
    title: `Should you buy Ethereum in 2021? ETH Buying Research `,
    date: `May 6, 2021`,
    imgSrc: BlogImg
  }
]
const BlogDetail = () => {
  return (
    <BlogPageLayout>
      <BlogDetailHero {...blogDetailHeroData}/>
      <div className="layout-container">
        <BlogDetailContentSection 
          content={blogDetailContentData}
          features={featuresBlogData}/>

        <BlogDetailList />
      </div>
    </BlogPageLayout>
  );
};

export default BlogDetail;