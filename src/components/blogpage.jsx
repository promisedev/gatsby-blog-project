import React from "react";
import {
  post_section,
  section1,
  section2,
  aside_one,
  aside_two,
  aside_three,
  aside_four,
  aside_five,
} from "./styles/blogpage.module.css";
import Blogpost from "./blogpost";
import Popularpost from "./asidepost";
import Videopost from "./asidepost1";
import Ads from "./ads";
import Ads1 from "./ads1";
const Blogpage = ({ title,data }) => {
  return (
    <section className={post_section}>
      {/* **********left */}
      <article className={section1}>
        <Blogpost title={title} data={data}/>
        {/* ----------------------------- */}
      </article>
      {/* ******************right*/}
      <article className={section2}>
        {/* popular post -------------------------------*/}

        <div className={aside_one}>
          <Popularpost title="random post" />{" "}
        </div>
        {/* ads1 -------------------------------*/}
        <div className={aside_two}>
          <Ads />{" "}
        </div>
        {/* trending video -------------------------------*/}

        <div className={aside_three}>
          <Videopost title="trending videos" />{" "}
        </div>
        {/* ads3 -------------------------------*/}

        <div className={aside_four}>
          <Ads />{" "}
        </div>
        {/* ads4 -------------------------------*/}
        <div className={aside_five}>
          <Ads1 />{" "}
        </div>
        {/* --end------------ */}
      </article>
    </section>
  );
};
export default Blogpage;
