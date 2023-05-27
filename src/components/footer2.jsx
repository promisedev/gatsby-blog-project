import React from "react";
import pages from "../models/pages.json";
import socials from "../models/socials.json";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedIcon from "@mui/icons-material/Linkedin";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Instagram } from "@mui/icons-material";

import {
  footer,
  footer_item1,
  footer_item2,
  footer_item3,
  footer_item1_post,
  post_title,
  post_body,
  post_body_item,
  p_img,
  p_desc,
  footer_pages,
  footer_social,
  social_icon,
  page_item,
} from "./footer.module.css";
import { Link } from "gatsby";

const Footer = () => {
  const post = [
    { category: "recent", posts: [{}, {}, {}, {}] },
    { category: "popular", posts: [{}, {}, {}, {}] },
  ];

  const date = new Date().getFullYear();

  return (
    <footer className={footer}>
      {/* add posts under */}
      {/* <article className={footer_item1}>
        {post.map((post, index) => {
          return (
            <div className={footer_item1_post} key={index}>
              <div className={post_title}>
                <h3>{post.category} posts</h3>
                <p></p>
              </div> */}
              {/* ---------------------------------------- */}
              {/* <div className={post_body}>
                {post.posts?.map((post, index) => {
                  return (
                    <div className={post_body_item} key={index}>
                      <div className={p_img} />
                      <div className={p_desc}>
                        <h4>Lorem ipsun baby boy with adius lorem </h4>
                        <p>August 12, 2023</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </article> */}
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
