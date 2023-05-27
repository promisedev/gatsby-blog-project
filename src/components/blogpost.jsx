import React, { useEffect, useState, useMemo,useRef } from "react";
import {
  post_body,
  post_cont,
  post_control,
  post_modal,
  post_tag,active_tag,inactive_tag,
  post_card,
} from "./styles/recentpost.module.css";
import Title from "./title";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Recentcard from "./recentcard";
import Recentawait from "./recentawait";
import { ContrastRounded } from "@mui/icons-material";
const Post = ({ title,data}) => {
  const top = useRef(null)
    const [seeking,setSeeking]=useState(true)
  const [num, setNum] = useState([]);
  const [postview, setPostview] = useState([]);
  const post1 = [1,2,3,4,5,6,7,8,9,10]
  console.log(data)
  const post = data?.allContentfulTribesSchema.edges
    ?.map((edge) => {
      return { ...edge.node };
    });

  useEffect(() => {
    let index = 1000;

    for (let i = 1; i < index; i++) {
      let io = i * 10;
      let is = (i + 1) * 10;

      //console.log(io, is);
      if (post?.length <= 10) {
        setNum([0]);
      } else if (post?.length > io && post?.length <= is) {
        let arr = [];
        let div = is / 10;
        for (let i = 0; i < div; i++) {
          arr.push(i);
        }
        setNum(arr);
        //console.log(arr);
      }
    }
  }, []);


  useMemo(()=>{
const newpost = post?.filter((post, index) => {
  if (index < 10) {
    return post;
  }
});
setPostview(newpost);
setSeeking(false)
  },[])

  const changePost =(e)=>{
  const len = e.currentTarget.parentElement.children.length;

  for (let i = 0; i <= len; i++) {
    e.currentTarget.parentElement.children[i]?.classList.add(`${inactive_tag}`);
  }
  e.currentTarget.classList.remove(`${inactive_tag}`);
  e.currentTarget.classList.add(`${active_tag}`);

setSeeking(true)
const id = e.currentTarget.dataset.id
if(id ==1){
const newpost = post?.filter((post,index)=>{
  if(index <10){
    return post
  }
})
setPostview(newpost)
setTimeout(() => {
 setSeeking(false) 
}, 3000);

}else{
 let io = (id-1) * 10;
      let is = id * 10; 
const newpost = post?.filter((post,index)=>{  
  if(index >io && index <=is){
    return post
  }
})
setPostview(newpost)
setTimeout(() => {setSeeking(false)}, 3000);

}
const position = top.current.getBoundingClientRect().top;
window.scrollTo(0,position)
  }

  return (
    <section className={post_body}> 
      <Title title={title} />
      {/* ----------------------------------- */}
      <article className={post_cont} ref={top}>
        <div className={post_modal}>
         {seeking? (post1.map((post, index) => {
            return (
              <div className={post_card} key={index}>
                <Recentawait /> 
              </div>
            );
          })):(postview?.map((post, index) => {
            return (
              <div className={post_card} key={index}>
                <Recentcard data={post} />
              </div>
            );
          }))}
        </div>

        {/* ----------------------------------- */}
        <div className={post_control}>
          {num.map((num, index) => {
            return (
              <span className={post_tag} key={index} data-id={index+1} onClick={changePost} >
                {index + 1}
              </span>
            );
          })}
          <span className={post_tag} data-id={num.length}onClick={changePost}>
            <KeyboardDoubleArrowRightIcon />
          </span>
        </div>
      </article>
    </section>
  );
};

export default Post;
