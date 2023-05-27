import React from "react";
import { post_body, post_image, post_desc,post_vid } from "./styles/postcard.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "gatsby";
const Postcard = ({ data }) => {
  const date = "May 23, 2023";
  const desc =data?.excerpt
  return (
    <article className={post_body}>
      <div className={post_image}>
        <video src={data?.media.url} className={post_vid}/>
      </div>
      {/* ---------------------------- */}
      <div className={post_desc}>
        <h3><Link to={`/blogs/${data?.slug}`}>{desc}</Link></h3>
        {/* <p>
          <AccessTimeIcon style={{ fontSize: "14px" }} />
          &nbsp; {date}
        </p> */}
      </div>
    </article>
  );
};

export default Postcard;
