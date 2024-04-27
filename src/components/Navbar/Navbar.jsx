"use client";

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Motion, useMotionValueEvent, useScroll } from "framer-motion";
import { BiMenuAltRight } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [navStyle, setNavStyle] = useState("");
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    latest > 0.2 ? setNavStyle("sticky") : setNavStyle("");
  });

  return (
    <div className={`n-wrapper ${navStyle}`}>
      {/* desktop version */}
      <div className="container">
        <div className="n-container">
          <div className="n-logo">
            <span>ARIZONA</span>
          </div>

          <div className="n-right">
            <div className="n-menu">
              <Link to="wwd-wrapper" spy={true} smooth={true}>
                <span>What we do</span>
              </Link>
              <Link to="hiw-wrapper" spy smooth offset={100}>
                <span>How it works</span>
              </Link>
              <Link to="wwi-wrapper" spy smooth>
                <span>Who we invest in</span>
              </Link>
              <Link to="t-wrapper" spy smooth offset={100}>
                <span>Testimonials</span>
              </Link>
            </div>

            <div className="fund-button">Get Funded</div>
          </div>
        </div>
      </div>
      {/* mobile version */}
      <div className="nm-container">
        {/* logo */}
        <span>ARIZONA</span>

        {/* Menu icon */}
        {!mobileMenuOpened ? (
          <BiMenuAltRight size={30} onClick={() => setMobileMenuOpened(true)} />
        ) : (
          <RxCross2 size={30} onClick={() => setMobileMenuOpened(false)} />
        )}

        {/*mobile menu */}
        <div
          className="nm-menu"
          style={{ transform: mobileMenuOpened && "translateX(0%)" }}
        >
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwd-wrapper"
            spy={true}
            smooth={true}
          >
            <span>What we do</span>
          </Link>

          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="hiw-wrapper"
            spy={true}
            smooth={true}
          >
            <span>How it works</span>
          </Link>

          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="wwi-wrapper"
            spy={true}
            smooth={true}
          >
          <span>Who we invest in</span>
          </Link>
          
          <Link
            onClick={() => setMobileMenuOpened(false)}
            to="t-wrapper"
            spy={true}
            smooth={true}
          >
            <span>Testimonials</span>
          </Link>
          <div className="m-funded-button">Get Funded</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
