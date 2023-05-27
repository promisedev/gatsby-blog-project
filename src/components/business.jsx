import React from "react";
import {
  business_body,
  post_cont,
  col1,
  col2,
  col2_item,
} from "./styles/business.module.css";
import Title from "./title";
import Herocard from "./herocard";
import Postcard from "./postcard";
import { useStaticQuery, graphql } from "gatsby";
const Business = () => {
  const post = [1, 2, 3];
  const data = useStaticQuery(graphql`
    {
      allContentfulTribesSchema(
        sort: { createdAt: ASC }
        filter: { category: { eq: "business" } }
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

  const datainfo = data.allContentfulTribesSchema.edges?.filter((edge) =>{
      if(edge.node.type === "image article"){return edge}
    } ).map((edge) => {
      return { ...edge.node };
    })
    ; 

  const busi = data.allContentfulTribesSchema.edges?.filter((edge) =>{
      if(edge.node.type === "image article"){return edge}
    } ).map((edge) => {
      return { ...edge.node };
    })[0]

    //console.log(datainfo,busi)

  return (
    <section className={business_body}>
      <Title title="business" />
      {/* ----------------------------------- */}
      <article className={post_cont}>
        <div className={col1}>
          <Herocard data={busi} opa="rgb(0,0,0,0.6)" />
        </div>
        <div className={col2}>
          {datainfo?.map((post, index) => {
            if (index > 0 && index < 4) {
              return (
                <div className={col2_item} key={index}>
                  <Postcard data={post} />
                </div>
              );
            }
          })}
        </div>
      </article>
    </section>
  );
};

export default Business;
