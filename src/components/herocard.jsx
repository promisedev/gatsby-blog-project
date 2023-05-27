import React from 'react'
import {card,card_overlay,card_header,card_desc,card_image} from './styles/hero.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {Link} from "gatsby"
const Card =({data,opa})=>{
//console.log(data)    
const color = opa ||"rgb(0,0,0,0.7)"
const tag = data?.category;
const date = data?.postedAt;
const desc = data?.excerpt;
const image = getImage(data?.media.gatsbyImage)

    return(
        <article className={card}>
        <GatsbyImage image={image} className={card_image} alt=""/>
        <main className={card_overlay} style={{background:`${color}` ,}}>
<div className={card_header}>
<h3>{tag}</h3>
</div>
{/* -------------------------- */}
 <div className={card_desc}>
    <h4><Link to={`/blogs/${data?.slug}`}>{desc}</Link></h4>
    <p><AccessTimeIcon style={{fontSize:"14px"}}/>&nbsp; {date}</p>
    </div>           
            </main>    

        </article>
    )
}

export default Card