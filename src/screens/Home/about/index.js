import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./AboutUs.module.sass";
import ScrollButton from "../../../components/ScrollButton";


const AboutUs = ({ scrollToRef }) => {
  return (
    <div className={cn("section-mb0", styles.download)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.bg}>
          <img
            srcSet="/images/content/why.png"
            src="/images/content/why.png"
            alt="Download"
          />
        </div>
        <div className={styles.wrap}>
          <h2 className={cn("h2", styles.title)}>Why Exhert?</h2>
          <div className={styles.info}>
            Anytime, anywhere. Trade crypto on your terms.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
