import React,{useEffect} from "react";
import {post_section,
  section1,
  section2,
  aside_one,
  aside_two,
  aside_three,
  aside_four,
  aside_five,title,tags,tag1,tag2,tag3,image,
image_image, video,content,social_share,share_wrap,social_icon,related_post,post_body,post_item} from "./styles/blogtem.module.css";
  import Popularpost from "./asidepost";
import Videopost from "./asidepost1";
import Ads from "./ads"; 
import Ads1 from "./ads1";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { GatsbyImage,getImage } from "gatsby-plugin-image";
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Postcard from "./postcard";
import {useStaticQuery,graphql} from "gatsby"
const Blogtem = ({ data }) => {
const {blogContent,
category,
createdAt,
excerpt,
id,
media:{gatsbyImage, url},
postedAt,
slug,
source,
tag,
type
}=data;
console.log(blogContent.raw)
const pathToimage = getImage(gatsbyImage);

const datainfo = useStaticQuery(graphql`
  {
    allContentfulTribesSchema(
      sort: { createdAt: ASC }) {
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

const related= datainfo.allContentfulTribesSchema.edges.filter((edge)=>edge.node.slug !==slug).map((edge)=>{
  return{...edge.node}
}).filter((edge)=>{
  if(edge.category == category || edge.tag==tag){
    return edge
  }
}).filter((edge,index)=>index<6)





const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
  },
  renderNode: {
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return (
        <a href={uri} className="underline">
          {children}
        </a>
      )
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2>{children}</h2>
    },
  },
}



  return (
    <section className={post_section}>
      {/* **********left */}
      <article className={section1}>
        {/* -----------------display heading */}
        <h2 className={title}>{excerpt}</h2>
        {/* -------display tags */}
        <div className={tags}>
          <span className={tag1}>Source: {source}</span>
          {/*  */}
          <span className={tag2}>
            <AccessTimeIcon style={{ fontSize: "13px",marginRight:"4px" }} /> {postedAt}
          </span>
          {/*  */}
          <span className={tag3}>tag: {tag}</span>
        </div>
        {/* ------------display image----------------- */}
        <div className={image}>
          {type == "image article" ? (
            <GatsbyImage 
              image={pathToimage}
              alt={slug}
              className={image_image}
            />
          ) : (
            <video src={url} controls className={video} />
          )}
        </div>
        {/* --------------------blog content------------------- */}

        <div className={content}>{renderRichText(blogContent, options)}</div>
        {/* ----------social share */}
        <div className={social_share}>
          <h4>Share</h4>
          <div className={share_wrap}>
            <a
              href={`https://www.facebook.com/sharer.php?u=${`http://localhost:8000/blogs/${slug}`}`}
              className={social_icon}
            >
              <FacebookOutlinedIcon
                style={{ color: "rgb(17, 61, 156)", fontSize: "20px" }}
              />
            </a>
            {/* -- */}
            <a
              href={`https://api.whatsapp.com/send?text=${excerpt} ${`http://localhost:8000/blogs/${slug}`}`}
              className={social_icon}
            >
              <WhatsAppIcon
                style={{ color: "rgb(5, 104, 14)", fontSize: "20px" }}
              />
            </a>
            {/* -- */}
            <a
              href={`https://twitter.com/share?url=${`http://localhost:8000/blogs/${slug}`}&text=${excerpt}&hashtags=${tag}`}
              className={social_icon}
            >
              <TwitterIcon
                style={{ color: "rgb(7, 106, 187)", fontSize: "20px" }}
              />
            </a>
            {/* -- */} 
            <a
              href={`https://www.linkedin.com/shareArticle?url=${`http://localhost:8000/blogs/${slug}`}&title=${excerpt}`}
              className={social_icon}
            >
              <LinkedInIcon
                style={{ color: "rgb(7, 106, 187)", fontSize: "20px" }}
              />
            </a>
            {/* -- */}
          </div>
        </div>

        {/* ------------------related post----------------- */}

        <div className={related_post}>
          <h2>Related Post</h2>
          <div className={post_body}>
            {related.map((post, index) => {
              return (
                <div className={post_item}>
                  <Postcard data={post} />
                </div>
              );
            })}
          </div>
        </div>
        {/* --------------------------- */}
      </article>
      {/* ******************right*/}
      <article className={section2}>
        {/* popular post -------------------------------*/}

        <div className={aside_one}>
          <Popularpost title="random post" />{" "}
        </div>
        {/* ads1 -------------------------------*/}
        <div className={aside_two}>
          <Ads />{" "}
        </div>
        {/* trending video -------------------------------*/}

        <div className={aside_three}>
          <Videopost title="trending videos" />{" "}
        </div>
        {/* ads3 -------------------------------*/}

        <div className={aside_four}>
          <Ads />{" "}
        </div>
        {/* ads4 -------------------------------*/}
        <div className={aside_five}>
          <Ads1 />{" "}
        </div>
        {/* --end------------ */}
      </article>
    </section>
  );
};
export default Blogtem;

