import React, { useState } from "react";
import cn from "classnames";
import styles from "./Header.module.sass";
import { Link, NavLink } from "react-router-dom";
import Image from "../Image";
import Dropdown from "./Dropdown";
import Settings from "./Settings";
import Icon from "../Icon";
import Notifications from "./Notifications";
import Theme from "../Theme";
import User from "./User";

const navigation = [
  // {
  //   title: "Exchange",
  //   url: "/exchange",
  // },
  {
    title: "Contact Us",
    url: "/contact",
  },
  // {
  //   title: "Buy Crypto",
  //   dropdown: [
  //     {
  //       title: "Credit card",
  //       icon: "user",
  //       url: "/buy-crypto",
  //     },
  //     {
  //       title: "Bank deposit",
  //       icon: "image",
  //       url: "/deposit-fiat",
  //     },
  //   ],
  // },
  // {
  //   title: "Market",
  //   url: "/market",
  // },
  // {
  //   title: "Discover",
  //   url: "/learn-crypto",
  // },
];

const Header = ({ headerWide }) => {
  const [visibleNav, setVisibleNav] = useState(false);

  return (
    <header className={cn(styles.header, { [styles.wide]: headerWide })}>
      <div className={cn("container", styles.container)}>
        <Link
          className={styles.logo}
          to="/"
          onClick={() => setVisibleNav(false)}
        >
              {/* <img
                className={styles.picDesktop}
                src="images/logo_light.png"
                srcSet="images/logo_dark.png"
                alt="Exhert"
              /> */}
              <Image
              className={styles.picDesktop}
              src="/images/logo_light.png"
              srcDark="/images/logo_dark.png"
              />
              <Image
                className={styles.picMobile}
                src="/images/logo_mobile.png"
                srcDark="/images/logo_mobile.png"
              />
            </Link>
        <div className={styles.wrapper}>
          <div className={cn(styles.wrap, { [styles.visible]: visibleNav })}>
            <nav className={styles.nav}>
              {navigation.map((x, index) =>
                x.dropdown ? (
                  <Dropdown
                    className={styles.dropdown}
                    key={index}
                    item={x}
                    setValue={setVisibleNav}
                  />
                ) : (
                  <NavLink
                    className={styles.item}
                    activeClassName={styles.active}
                    onClick={() => setVisibleNav(false)}
                    to={x.url}
                    key={index}
                  >
                    {x.title}
                  </NavLink>
                )
              )}
            </nav>
            {/* <NavLink
              className={cn("button-stroke", styles.button)}
              activeClassName={styles.active}
              to="/wallet-overview"
              onClick={() => setVisibleNav(false)}
            >
              Wallet
            </NavLink> */}
            {/* <div className={styles.btns}>
              <Link
                className={cn("button-small", styles.button)}
                activeClassName={styles.active}
                to="/sign-up"
              >
                Get Early Access
              </Link> */}
              {/* <Link
                className={cn("button-stroke button-small", styles.button)}
                activeClassName={styles.active}
                to="/sign-in"
              >
                Login
              </Link> */}
            {/* </div> */}
          </div>
          {/* <Settings className={styles.settings} /> */}
          <div className={styles.control}>
            {/* <NavLink
              className={styles.activity}
              activeClassName={styles.active}
              to="/activity"
            >
              <Icon name="lightning" size="24" />
            </NavLink>
            <Notifications className={styles.notifications} />
            <NavLink
              className={cn("button-stroke button-small", styles.button)}
              activeClassName={styles.active}
              to="/wallet-overview"
            >
              Wallet
            </NavLink> */}
            <Theme className={styles.theme} icon />
            {/* <User className={styles.user} /> */}
          </div>
          {/* <div className={styles.btns}>
            <Link
              className={cn("button-small", styles.button)}
              activeClassName={styles.active}
              to="/sign-up"
              onClick={() => setVisibleNav(false)}
            >
              Get Early Access
            </Link> */}
            {/* <Link
              className={cn("button-stroke button-small", styles.button)}
              activeClassName={styles.active}
              to="/sign-in"
              onClick={() => setVisibleNav(false)}
            >
              Login
            </Link> */}
          {/* </div> */}
          <button
            className={cn(styles.burger, { [styles.active]: visibleNav })}
            onClick={() => setVisibleNav(!visibleNav)}
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
