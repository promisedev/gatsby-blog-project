import React from "react"
import {recent_body,recent_image,recent_desc,recent_img,recent_vid} from './styles/recentcard.module.css'
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import {Link} from 'gatsby'
import {GatsbyImage,getImage} from "gatsby-plugin-image"

const Recentcard =({data})=>{
const date = data?.postedAt;
const desc = data?.excerpt;
const ecerpt = data?.shortDesc;
const image = getImage(data?.media.gatsbyImage)
    return (
      <article className={recent_body}>
        <div className={recent_image}>
{data?.type=="image article"?<GatsbyImage image={image} alt={desc} className={recent_img}/>:<video src={data?.media.url} className={recent_vid}/>}
        </div>
        {/* --------------------------------------------- */}
        <div className={recent_desc}>
          <h3>{desc}</h3>
          <p>
            <AccessTimeIcon style={{ fontSize: "14px", margin:"0" }} />
            &nbsp; {date}
          </p>
          <h4>{ecerpt}</h4>
          <Link to={`/blogs/${data?.slug}`}>read more</Link>
        </div> 
      </article>
    );
}

export default Recentcard