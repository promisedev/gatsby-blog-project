import React from "react";
import {
  tech_body,
  post_cont,post_item
} from "./styles/technology.module.css";
import Title from "./title";

import Card from "./card"; 
 import { useStaticQuery, graphql } from "gatsby";
const Technology = () => {
  const post = [1, 2, 3];
  const data = useStaticQuery(graphql`
    {
      allContentfulTribesSchema(
        sort: { createdAt: ASC }
        filter: { category: { eq: "technology" } }
      ) {
        edges {
          node {
            media {
              gatsbyImage(placeholder: BLURRED, width: 300)
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

  const datainfo = data.allContentfulTribesSchema.edges
    ?.filter((edge) => {
      if (edge.node.type === "image article") {
        return edge;
      }
    })
    .map((edge) => {
      return { ...edge.node };
    });
  return (
    <section className={tech_body}>
      <Title title="technology" />
      {/* ----------------------------------- */}
      <article className={post_cont}>
        {datainfo?.map((post, index) => {
          if(index<3){
        return(
          <div className={post_item} key={index}>
            <Card data={post}/>
          </div>)}
        })}
      </article>
    </section>
  );
};

export default Technology;
