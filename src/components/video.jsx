import React, { useState } from "react";
import {
  tech_body,
  post_cont,
  post_item,
  post_item1,
  post_item2,
  action,
  action_icon1,
  action_icon2,
  show_pause,
  hide_play,show_action
} from "./styles/video.module.css";
import Title from "./title";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import { IconButton } from "@mui/material";
import {useStaticQuery, graphql, Link} from "gatsby"
const Video = () => {
  const [playing, setPlaying] = useState(false);
  const Playnews = (e) => {
    const video = e.currentTarget.parentElement.children[1];
    const pause = e.currentTarget.children[0].children[0];
    const play = e.currentTarget.children[0].children[1];
    pause.classList.toggle(`${show_pause}`);
    play.classList.toggle(`${hide_play}`);

    if (video.paused) {
     video.play();
      setPlaying(true);
    } else {
       video.pause();
       setPlaying(false);
    }
  };
  const showAction=(e)=>{
e.currentTarget.children[0].classList.add(`${show_action}`)
  }

 const hideAction=(e)=>{
e.currentTarget.children[0].classList.remove(`${show_action}`)
  } 

 const data = useStaticQuery(graphql`
   {
     allContentfulTribesSchema(sort: { createdAt: ASC }) {
       edges {
         node {
           media {
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
   }).filter((edge,index)=>index<3); 
  
  return (
    <section className={tech_body}>
      <Title title="videos" />
      {/* ----------------------------------- */}
      <article className={post_cont}>
        {post?.map((post, index) => (
          <div className={post_item} key={index}>
            <div className={post_item1} onMouseOver={showAction} onClick={showAction} onMouseLeave={hideAction}>
              <div className={action} onClick={Playnews}>
                <IconButton style={{width: "100%",height:"100%",display:"flex", alignItems:"center",justifyContent:"center"}}>
                  <div className={action_icon1}><PauseIcon/></div>
                  <div className={action_icon2}><PlayArrowIcon/></div>
                </IconButton>
              </div>
              <video
                src={post?.media.url}
                controlsList="nodownload"
                captions={post?.excerpt}
              />
            </div>
            {/*-------------------------  */}
            <div className={post_item2}>
              <h3><Link to={`/blogs/${post?.slug}`}>{post?.excerpt}</Link></h3>
              <p>
                <AccessTimeIcon style={{ fontSize: "14px", margin: "0" }} />
                &nbsp; {post?.postedAt}
              </p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Video;
