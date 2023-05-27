import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {card_body,card_cont,card_item,card_image} from './styles/card.module.css'
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import {Link} from "gatsby";
const Card =({data})=>{
const bg = "";
const date = data?.postedAt;
const desc = data?.excerpt
const image = getImage(data?.media.gatsbyImage)
    return (
      <article className={card_body} > 
<GatsbyImage image={image} alt={desc} className={card_image}/>


        <div className={card_cont}>
            <div className={card_item}>
          <h3><Link to={`/blogs/${data?.slug}`}>{desc}</Link></h3>
          <p>
            <AccessTimeIcon style={{ fontSize: "14px" }} />
            &nbsp; {date}
          </p></div>
        </div>
      </article>
    );
}

export default Card