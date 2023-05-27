import React from "react";
import Layout from "../../components/layout2";
import Blogtemplate from "../../components/blogtem";
import {graphql} from 'gatsby'
const NewsTemp = ({data}) => {
console.log(data)
  return (
    <Layout>
      <Blogtemplate data={data.contentfulTribesSchema}/>
    </Layout>
  );
};

export const query = graphql`
  query Myblog($slug: String) {
  contentfulTribesSchema(slug: {eq: $slug}) {
    id
    blogContent {
      raw
    }
    category
    createdAt(formatString: "MMMM Do, YYYY")
    excerpt
    postedAt(formatString: "MMMM Do, YYYY")
    tag
    type
    source
    slug
    media {
      gatsbyImage(placeholder: DOMINANT_COLOR, width: 300)
      url
    }
  }
}
`
export default NewsTemp;
