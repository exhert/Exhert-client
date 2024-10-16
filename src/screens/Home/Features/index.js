import React from "react";
import cn from "classnames";
import styles from "./Feature.module.sass";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Icon from "../../../components/Icon";
import Card from "./Card";

const items = [
  {
    title: "Mobile Money Convenience",
    content:
      "Trading crypto has never been easier. Use your mobile money wallet for instant transactions.",
    button: "Buy crypto",
    image: "/images/content/fasttransfer.png",
    image2x: "/images/content/fasttransfer.png 2x",
    url: "/buy-crypto",
  },
  {
    title: "Safe & Secure",
    content:
      "Our escrow system ensures both you and the other party are protected throughout the trade. Your funds are safe until the transaction is complete",
    button: "Trade now",
    image: "/images/content/shield.png",
    image2x: "/images/content/shield.png 2x",
    icon: "payement",
    url: "/exchange",
  },
  {
    title: "User-Friendly Experience",
    content:
    "From beginners to seasoned traders, we’ve designed Exhert to be simple and intuitive for everyone.",
    button: "Trade now",
    image: "/images/content/ufe.png",
    image2x: "/images/content/ufe.png 2x",
    icon: "payement",
    url: "/exchange",
  },
  {
    title: "Flexible Trading",
    content:
      "If you can’t find the right offer on the platform, don’t worry. You can trade directly with Exhert at our fixed rates—no need to wait for another user.",
    button: "Learn now",
    image: "/images/content/flexible-trading.png",
    image2x: "/images/content/flexible-trading.png 2x",
    icon: "payement",
    url: "/learn-crypto",
  },
];

// const SlickArrow = ({ currentSlide, slideCount, children, ...props }) => (
//   <button {...props}>{children}</button>
// );

const Feature = () => {
 

  return (
    <div className={cn("section section-mb0" ,styles.section )}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrapper}>
            {items.map((x, index) => (
              <Card className={styles.card} item={x} key={index} />
            ))}
        </div>
        {/* <div className={styles.btns}>
          <Link className={cn("button", styles.button)} to="/contact">
            Contact Us
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Feature;
