import React ,{useEffect,useState}from "react";
import {
  post_body,
  post_cont,post_item
  
} from "./styles/asidepost.module.css";
import Title from "./title";
import Postcard from "./postcard";
import { useStaticQuery, graphql } from "gatsby";
const Post = ({title}) => { 
  const post = [1, 2,3];
const[preview,setPreview]=useState([])
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

useEffect(()=>{

  let arr = [];
      for (let i = 0; i < 3; i++) {
        let ii = Math.floor(
          Math.random() * (data.allContentfulTribesSchema.edges.length - 1)
        );
        if (arr.includes(ii)) {
          let ind = Math.abs(ii - 1);
          arr.push(ind);
        } else {
          arr.push(ii);
        }
      }

  const post1 = data.allContentfulTribesSchema.edges
    ?.map((edge) => {
      return { ...edge.node };
    })
    .filter((edge, index) => {      
      if (index == arr[0] || index == arr[1] || index == arr[2]) {
        //console.log(edge);
        return edge;
      }
    });

  setPreview(post1)
},[])

 
 
  return (
    <section className={post_body}>
      <Title title={title} />
      {/* ----------------------------------- */}
      <article className={post_cont}>
        {preview.map((post, index) => (
          <div className={post_item} key={index}>
            <Postcard  data={post}/>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Post;
