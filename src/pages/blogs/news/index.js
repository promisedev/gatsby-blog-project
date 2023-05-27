import React from "react";
import Layout from "../../../components/layout2";
import Blogpage from "../../../components/blogpage";
import {graphql} from "gatsby"
const News = ({data}) => {
  return (
    <Layout>
      <Blogpage title="news" data={data} /> 
    </Layout>
  );
};
export const data = graphql`
  {
    allContentfulTribesSchema(
      sort: { createdAt: ASC }
      filter: { category: { eq: "news" } }
    ) {
      edges {
        node {
          media {
            gatsbyImage(placeholder: BLURRED, width: 300)
            url
          }
          slug
          type
          postedAt(formatString: "MMMM d, YYYY")
          excerpt
          shortDesc
          category
          createdAt(formatString: "MMMM d, YYYY")
        }
      }
    }
  }
`;
export default News;
