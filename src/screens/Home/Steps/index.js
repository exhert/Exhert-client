import React from "react";
import cn from "classnames";
import styles from "./Steps.module.sass";
import Slider from "react-slick";
import Icon from "../../../components/Icon";

const items = [
  {
    title: "Browse Ads",
    image2x: "/images/content/step-1@2x.png",
    image: "/images/content/step-1.png",
    content:
      "Find the right offer that meets your needs.",
  },
  {
    title: "Trade with Confidence",
    image2x: "/images/content/step-2@2x.png",
    image: "/images/content/step-2.png",
    content:
      "Use your mobile money wallet and our escrow service to ensure a safe, smooth transaction.",
  },
  {
    title: "Or Trade Directly with Us",
    image2x: "/images/content/step-3@2x.png",
    image: "/images/content/step-3.png",
    content:
      "If you don’t see the deal you want, you can buy or sell directly with Exhert, no hassle.",
  },
];



const Steps = ({ scrollToRef }) => {
 

  return (
    <div className={cn("section", styles.section)} ref={scrollToRef}>
      <div className={cn("container", styles.container)}>
        <div className={styles.head}>
          <h2 className={cn("h2", styles.title)}>How it Works</h2>
          <div className={styles.info}>
          We make it incredibly simple. Whether you’re buying or selling, just follow these steps
          </div>
        </div>
        <div className={styles.list}>
          {items.map((x, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.number}>Step {index + 1}</div>
              <div className={styles.preview}>
                <img
                  srcSet={`${x.image2x} 2x`}
                  // src={x.image}
                  alt={`Step ${index + 1}`}
                />
              </div>
              <div className={styles.subtitle}>{x.title}</div>
              <div className={styles.content}>{x.content}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
