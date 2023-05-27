import React from "react";
import { hero_body, col1, col2, col2_item } from "./styles/hero.module.css";
import Herocard from "./herocard";
import { useStaticQuery, graphql } from "gatsby";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
  allContentfulTribesSchema(sort: {createdAt: ASC}) {
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
  const business = data.allContentfulTribesSchema.edges
    ?.filter((data) => {
        if(data.node.category == "business" && data.node.type == "image article"){return data}
    }).map((data)=>{
        return {...data.node}
    })[0]

 const lifestyle = data.allContentfulTribesSchema.edges
    ?.filter((data) => {
        if(data.node.category == "lifestyle" && data.node.type == "image article"){return data}
    }).map((data)=>{
        return {...data.node}
    })[0] ;
const news = data.allContentfulTribesSchema.edges
    ?.filter((data) => {
        if(data.node.category == "news" && data.node.type == "image article"){return data}
    }).map((data)=>{
        return {...data.node}
    })[0];
const news2 = data.allContentfulTribesSchema.edges
    ?.filter((data) => {
        if(data.node.category == "news" && data.node.type == "image article"){return data}
    }).map((data)=>{
        return {...data.node}
    })[1];
    
const technology = data.allContentfulTribesSchema.edges
    ?.filter((data) => {
        if(data.node.category == "technology" && data.node.type == "image article"){return data}
    }).map((data)=>{
        return {...data.node}
    })[0];
    
  return (
    <section className={hero_body}>
      {/* news */}
      <div className={col1}>
        <Herocard  data={news} /> 
      </div>
      <div className={col2}>
        {/* Lifestyle */}
        <div className={col2_item} style={{ background: "" }}>
          <Herocard data={lifestyle}/>
        </div>
        {/* Technology */}
        <div className={col2_item} style={{ background: "" }}>
          <Herocard data={technology}/>
        </div>
        {/* Business */}
        <div className={col2_item} style={{ background: "" }}>
          <Herocard data={business}/>
        </div>
        {/* news */}
        <div className={col2_item} style={{ background: "" }}>
          <Herocard data={news2}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
