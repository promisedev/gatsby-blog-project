import React from "react";
import {
  header,
  header_image,
  header_pages,
  header_social,
  header_page,
  header_drop,
  header_aside,
  header_slide,
  social_icon,
  header_slide_close,
  nav_pages,nav_page,nav_subpages,nav_subpage
} from "./header.module.css";
import pages from "../models/pages.json";
import socials from '../models/socials.json'
import { StaticImage } from "gatsby-plugin-image";
import logo from '../assets/logo.png'
import { Link } from "gatsby";
import { useState } from "react";
import { useEffect } from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedIcon from "@mui/icons-material/Linkedin";
import InstagramIcon from "@mui/icons-material/Instagram";
import { ArrowDropDown, Instagram } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import {IconButton} from "@mui/material"

const Header = () => {
const [pos,setPos]=useState(0)
const [dis,setDis]=useState("none")
const [ind,setInd]=useState("")
useEffect(()=>{
setPos(pos)
setDis(dis)
},[pos,dis])

  const pageDrop=(e)=>{
    const id = e.currentTarget.dataset.id
    const ele = e.currentTarget
   let position =ele.getBoundingClientRect()
let left = position.left
let right = position.right
let xy = Number(((right+left)/10).toFixed())

   if(id == "blogs"){
    
    console.log(position,xy)
    setDis("flex")
    setPos(xy)
    setInd(id)
    //console.log(id,ele)
   }
    
  }
const pageRemove=(e)=>{
    setDis("none")
  }

 
  return (
    <header className={header}>
      <StaticImage
        src="../assets/logo.png"
        alt="logo"
        className={header_image}
      />
      {/* ------------------------------- */}

      <div className={header_drop}>
        <IconButton>
          <MenuIcon style={{ color: "#fff", fontSize: "40px" }} />
        </IconButton>
        <nav className={header_slide}>
          <div className={header_slide_close}>
            <IconButton>
              <CloseIcon style={{ color: "#fff", fontSize: "40px" }} />
            </IconButton>
          </div>
          {/* --------------------------------------- */}
          <ul className={nav_pages}>
            {pages.map((page, index) => (
              <li key={index} className={nav_page}>
                {" "}
                <Link to={`/${page.slug}`} data-id={page.name}>
                  <span>{page.name}</span> {page.pages && <ArrowDropDown />}
                </Link>
                {/* ------------------------------------------- */}
                <ul className={nav_subpages}>
                  {page.pages?.map((page, index) => (
                    <li key={index} className={nav_subpage}>
                      {" "}
                      <Link to={`/blogs/${page.slug}`}>{page.name}</Link>
                    </li>
                  ))}
                </ul>
                {/* ---------------------------------------- */}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* ------------------------------ */}
      <div className={header_page}>
        <nav className={header_pages}>
          <ul>
            <aside
              className={header_aside}
              style={{ display: `${dis}`, left: `${pos}px` }}
              onMouseLeave={pageRemove}
            >
              <ul>
                {pages
                  .filter((page) => page.name == ind)[0]
                  ?.pages?.map((page, index) => (
                    <li key={index}>
                      <Link to={`/blogs/${page.name}`}>{page.name}</Link>
                    </li>
                  ))}
              </ul>
            </aside>

            {pages.map((page, index) => (
              <li key={index}>
                {" "}
                <Link
                  to={`/${page.slug}`}
                  data-id={page.name}
                  onMouseOver={pageDrop}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* --------------------------------------------- */}
        <nav className={header_social}>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
