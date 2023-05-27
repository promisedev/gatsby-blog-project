import React from "react";
import {
  recent_body,
  recent_image1,
  recent_desc1,
} from "./styles/recentcard.module.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Link } from "gatsby";

const Recentcard = () => {
  const date = "May 23, 2023";
  const desc =
    "The Iphone 8 could be the first Apple handset with an OLED display";
  const ecerpt =
    "The Iphone 8 could be the first Apple rgb(76, 37, 81)D display, user are now asked to go to any apple store closeby to purchase the newly designed phone.";
  return (
    <article className={recent_body}>
      <div className={recent_image1}></div>
      {/* --------------------------------------------- */}
      <div className={recent_desc1}>
        <h3></h3>
        <p></p>
        <h4></h4>
        <p></p>
      </div>
    </article>
  );
};

export default Recentcard;
