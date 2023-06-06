import React,{useEffect,useState} from "react";
import pages from '../models/pages.json'
import socials from '../models/socials.json'
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Instagram } from "@mui/icons-material";
import { useStaticQuery, graphql } from "gatsby";
import { footer,footer_item1,footer_item2,footer_item3, footer_item1_post,post_title, post_body,post_body_item, p_img,p_desc,footer_pages,footer_social,social_icon,page_item ,p_image,p_video} from "./footer.module.css";
import { Link } from "gatsby";
import {GatsbyImage,getImage} from 'gatsby-plugin-image'
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const Footer = () => {
const [preview,setPreview]=useState([])
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
     if (index < 3) {
       return edge;
     }
   })
   .map((edge) => {
     return { ...edge.node };
   });

 useEffect(() => {
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

   setPreview(post1);
 }, []);  

const date = new Date().getFullYear()

  return (
    <footer className={footer}>
      {/* add posts under */}
      <article className={footer_item1}>
        {/*  --------------------------*/}
        <div className={footer_item1_post} >
          <div className={post_title}>
            <h3>recent posts</h3>
            <p></p>
          </div>
          {/* ---------------------------------------- */}
          <div className={post_body}>
            {post?.map((post, index) => {
              const image = getImage(post?.media.gatsbyImage);

              return (
                <div className={post_body_item} key={index}>
                  <div className={p_img}>
                    {post?.type === "image article" ? (
                      <GatsbyImage
                        image={image}
                        alt={post?.excerpt}
                        className={p_image}
                      />
                    ) : (
                      <video src={post?.media.url} className={p_video} />
                    )}
                  </div>
                  <div className={p_desc}>
                    <h4>
                      <Link to={`/blogs/${post?.slug}`}>{post?.excerpt}</Link>
                    </h4>
                    <p>
                      <AccessTimeIcon style={{ fontSize: "14px" }} />
                      &nbsp; {post?.postedAt}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* ------------------------------------ */}
        <div className={footer_item1_post} >
          <div className={post_title}>
            <h3>random posts</h3>
            <p></p>
          </div>
          {/* ---------------------------------------- */}
          <div className={post_body}>
            {preview?.map((post, index) => {
              const image = getImage(post?.media.gatsbyImage);

              return (
                <div className={post_body_item} key={index}>
                  <div className={p_img}>
                    {post?.type === "image article" ? (
                      <GatsbyImage
                        image={image}
                        alt={post?.excerpt}
                        className={p_image}
                      /> 
                    ) : (
                      <video src={post?.media.url} className={p_video} />
                    )}
                  </div>
                  <div className={p_desc}>
                    <h4>
                      <Link to={`/blogs/${post?.slug}`}>{post?.excerpt}</Link>
                    </h4>
                    <p>
                      <AccessTimeIcon style={{ fontSize: "14px" }} />
                      &nbsp; {post?.postedAt}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </article>
      {/* add pages and socials under */}
      <article className={footer_item2}>
        <div className={footer_pages}>
          {pages.map((page, index) => {
            return (
              <div key={index} className={page_item}>
                <Link to={`/${page.slug}`}>{page.name}</Link>
                <ul>
                  {page.pages?.map((page, index) => (
                    <li key={index}>
                      <Link to={`/blogs/${page.slug}`}>{page.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        {/* -------------------------------- */}
        <div className={footer_social}>
          {socials.map((social, index) => (
            <a href={social.link} key={index}>
              {(index == 0 && (
                <FacebookOutlinedIcon
                  className={social_icon}
                  style={{ fontSize: "12px" }}
                />
              )) ||
                (index == 1 && (
                  <TwitterIcon
                    className={social_icon}
                    style={{ fontSize: "12px" }}
                  />
                )) ||
                (index == 2 && (
                  <LinkedIcon
                    className={social_icon}
                    style={{ fontSize: "12px" }}
                  />
                )) ||
                (index == 3 && (
                  <InstagramIcon
                    className={social_icon}
                    style={{ fontSize: "12px" }}
                  />
                ))}
            </a>
          ))}
        </div>
      </article>
      {/* add copyright under */}
      <article className={footer_item3}>
        {"Copyright " + date + " All rights Reserved"}
      </article>
    </footer>
  );
};

export default Footer;
 