"use client";
import { HeroData } from "@/src/utils/data";
import EmailBox from "../EmailBox/EmailBox";
import { motion } from "framer-motion";
import "./Hero.css";
const Hero = () => {
  const variants = (delay) => ({
    initial: {
      y: "18rem",
    },

    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        damping: 25,
        duration: 2.5,
        delay,
      },
    },
  });

  const imgVariants = () => ({
    initial: {
      y: "18rem",
    },

    animate: {
      y: "0rem",
      transition: {
        type: "spring",
        duration: 2,
        stiffness: 30,
      },
    },
  });

  return (
    <div className="h-wrapper">
      <div className="container">
        <img src="hero/hero-arrow.png" alt="arrow" className="h-arrow" />

        {/* <Image  src="/hero/hero-arrow.png" alt="arrow" className="h-arrow" width={1000} height={1000} />*/}

        <div className="h-container">
          {/* left side */}
          <div className="h-left">
            <div className="image-row">
              {HeroData.slice(0, 3).map((person, i) => {
                return (
                  <div className="person-pill" key={i}>
                    <motion.div
                      initial={"initial"}
                      animate={"animate"}
                      variants={variants(person.delay)}
                      style={{ backgroundColor: person.bg }}
                      className="person-pill-bg"
                    >
                      <motion.img
                        initial={"initial"}
                        animate={"animate"}
                        variants={imgVariants()}
                        src={person.src}
                        alt={person.src}
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>

            <div className="image-row">
              {HeroData.slice(3, 6).map((person, i) => {
                return (
                  <div className="person-pill" key={i}>
                    <motion.div
                      initial={"initial"}
                      animate={"animate"}
                      variants={variants(person.delay)}
                      style={{ backgroundColor: person.bg }}
                      className="person-pill-bg"
                    >
                      <motion.img
                        initial={"initial"}
                        animate={"animate"}
                        variants={imgVariants()}
                        src={person.src}
                        alt={person.src}
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* right side */}
          <div className="h-right">
            <div className="h-title">
              <span>REDEFINE HOW</span>
              <span>YOU GROW YOUR</span>
              <span>DIGITAL BUSINESS</span>
            </div>

            <div className="h-desc">
              Revenue based funding and execution support designed for early
              stage founders
            </div>

            <EmailBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
