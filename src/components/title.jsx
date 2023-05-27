import React from 'react'
import {title_body,title_txt, title_line} from './styles/title.module.css'


const Title= ({title})=>{

    return(
        <article className={title_body}>
<div className={title_txt}><span></span> {title}</div>
<div className={title_line}></div>
        </article>
    )
}

export default Title
