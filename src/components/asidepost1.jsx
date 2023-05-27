import React from "react";
import {
  post_body,
  post_cont1,post_item1
  
} from "./styles/asidepost.module.css";
import Title from "./title";
import Postcard from "./postcard1";
import { useStaticQuery,graphql } from "gatsby";
const Post = ({title}) => {
 // const post = [1, 2,3,4,5,6,7,8];
const data = useStaticQuery(graphql`
  {
    allContentfulTribesSchema(sort: { createdAt: ASC }) {
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
          category
          createdAt(formatString: "MMMM d, YYYY")
        }
      }
    }
  }
`);

const post = data.allContentfulTribesSchema.edges
  ?.filter((edge, index) => {
     if (edge.node.type==="video article") {
       return edge;
     }
   })
   .map((edge) => {
     return { ...edge.node };
   }).filter((edge,index)=>index<9);;

  return (
    <section className={post_body}>
      <Title title={title} />
      {/* ----------------------------------- */}
      <article className={post_cont1}>
        {post.map((post, index) => (
          <div className={post_item1} key={index}>
            <Postcard data={post}/>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Post;
