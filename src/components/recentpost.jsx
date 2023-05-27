import React, { useEffect, useState,useMemo,useRef } from "react";
import {
  post_body,
  post_cont,
  post_control,
  post_modal,
  post_tag,
  post_card,active_tag,inactive_tag
} from "./styles/recentpost.module.css";
import Title from "./title";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Recentcard from "./recentcard";
import Recentawait from "./recentawait";
import { useStaticQuery,graphql } from "gatsby";
const Post = () => {
  const top = useRef(null);
  const [seeking, setSeeking] = useState(true);
  const [num, setNum] = useState([]);
  const [postview, setPostview] = useState([]);

  const data = useStaticQuery(graphql`
    {
      allContentfulTribesSchema(
        sort: { createdAt: ASC }
      ) {
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
            shortDesc
            category
            createdAt(formatString: "MMMM d, YYYY")
          }
        }
      }
    }
  `);

  const post = data.allContentfulTribesSchema.edges
    ?.filter((edge,index) => {
      if (index<20) {
        return edge;
      }
    })
    .map((edge) => {
      return { ...edge.node };
    });
 

  useEffect(() => {
    if (post?.length <= 4) {
      setNum([0]);
      return
    } else if (post?.length > 4 && post?.length <= 8) {
      let arr = [];
      for (let i = 0; i < 2; i++) {
        arr.push(i);
      }
      setNum(arr);
      return
    } else if (post?.length > 8 && post?.length <= 16) {
      let arr = [];
      for (let i = 0; i < 3; i++) {
        arr.push(i);
      }
      setNum(arr);
      return
    } else if (post?.length > 16 && post?.length <= 20) {
      let arr = [];
      for (let i = 0; i < 4; i++) {
        arr.push(i);
      }
      setNum(arr); 
      return
    }
  }, []);

  useMemo(()=>{
const newpost = post?.filter((post, index) => {
  if (index < 4) {
    return post;
  }
});
setPostview(newpost);
setSeeking(false)
  },[])

  const changePost = (e) => {
    const len = e.currentTarget.parentElement.children.length;

    for (let i = 0; i <= len; i++) {
      e.currentTarget.parentElement.children[i]?.classList.add(
        `${inactive_tag}`
      );
    }
    e.currentTarget.classList.remove(`${inactive_tag}`);
    e.currentTarget.classList.add(`${active_tag}`);

    setSeeking(true);
    const id = e.currentTarget.dataset.id;
    if (id == 1) {
      const newpost = post.filter((post, index) => {
        if (index < 4) {
          return post;
        }
      });
      setPostview(newpost);
      setTimeout(() => {
        setSeeking(false);
      }, 3000);
    } else {
      let io = (id - 1) * 4;
      let is = id * 4;
      const newpost = post.filter((post, index) => {
        if (index > io && index <= is) {
          return post;
        }
      });
      setPostview(newpost);
      setTimeout(() => {
        setSeeking(false);
      }, 3000);
    }
    const position =
      e.currentTarget.parentElement.parentElement.getBoundingClientRect()
        .bottom;
    const pos = top.current.getBoundingClientRect().top;
    const posi = position * 2 + pos;
    window.scrollTo(0, posi);
  };

  return (
    <section className={post_body}>
      <Title title="recent post" />
      {/* ----------------------------------- */}

      <article className={post_cont}>
        <div className={post_modal}>
          {seeking
            ? postview.map((post, index) => {
                return (
                  <div className={post_card} key={index}>
                    <Recentawait />
                  </div>
                );
              })
            : postview.map((post, index) => {
                return (
                  <div className={post_card} key={index} ref={top}>
                    <Recentcard data={post}/>
                  </div>
                );
              })}
        </div>

        {/* ----------------------------------- */}
        <div className={post_control}>
          {num.map((num, index) => {
            return (
              <span
                className={post_tag}
                key={index}
                data-id={index + 1}
                onClick={changePost}
              >
                {index + 1}
              </span>
            );
          })}
          <span className={post_tag} data-id={num.length} onClick={changePost}>
            <KeyboardDoubleArrowRightIcon />
          </span>
        </div>
      </article>
    </section>
  );
};

export default Post;
