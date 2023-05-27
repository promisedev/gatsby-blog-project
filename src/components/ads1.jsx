import React from "react";
import { ads1_body, ads1_item,item} from "./styles/ads.module.css";

const Ads = () => {
  return (
    <section className={ads1_body}>
<h2>Sponsored Ads</h2>
      <article className={ads1_item}>
        <div className={item}></div>
        <div className={item}></div>

        
      </article>

    </section>
  );
};
export default Ads;
