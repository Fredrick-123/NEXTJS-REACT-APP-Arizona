"use client";
import "./WhatWeDo.css";
import { features } from "@/src/utils/data";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  containerVariants,
  desVaraints,
  tagVaraints,
  titleVaraints,
} from "@/src/utils/animation";
const WhatWeDo = () => {
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          {/* head of section */}
          <div className="wwd-head">
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={tagVaraints}
              className="tag"
            >
              What we do
            </motion.span>{" "}
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              Empowering founders with non dilutive capital and execution
              expertise
            </motion.span>
            <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={desVaraints}
              className="desc"
            >
              Here is how we can evalute{" "}
            </motion.span>
          </div>

          {/* two  blocks*/}
          <div className="wwd-blocks">
            {/* first block */}
            <div className="wwd-block">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVaraints}
                className="sec-title"
              >
                Blue Advances
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVaraints}
                className="text"
              >
                Fund recurring growth expenses e.g. customer acquisition
              </motion.span>

              <div className="block-features">
                {features.slice(0, 3).map((feature, i) => {
                  return (
                    <motion.div
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={containerVariants((i + 1) * 0.1)}
                      className="block-feature"
                      key={i}
                    >
                      <Image
                        src={feature.icon}
                        alt="feature"
                        width={60}
                        height={60}
                      />
                      <span>{feature.title}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* second block */}
            <div className="wwd-block">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVaraints}
                className="sec-title"
              >
                Blue Seed
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVaraints}
                className="text"
              >
                Fund one-ffs to scale e.g. product, hiring
              </motion.span>

              <div className="block-features">
                {features.slice(3, 6).map((feature, i) => {
                  return (
                    <motion.div
                      initial="offscreen"
                      whileInView={"onscreen"}
                      variants={containerVariants((i + 1) * 0.1)}
                      className="block-feature"
                      key={i}
                    >
                      <Image
                        src={feature.icon}
                        alt="feature"
                        width={60}
                        height={60}
                      />
                      <span>{feature.title}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* support block */}
          <motion.div
            initial="offscreen"
            whileInView={"onscreen"}
            variants={containerVariants(0.3)}
            className="wwd-support"
          >
            {/* left side */}
            <div>
              <span className="sec-title">Blue Growth Support</span>
              <span className="desc">
                Data Insight and full stack expertise to supercharge growth
              </span>
            </div>

            {/* right side */}

            <div>
              <span className="text">
                Actionable data insights by connecting revenue , marketing
                social media platforms
              </span>
              <span className="text">
                On demand execution expertise at cost or revenue share
                proposition design , engineering , marketing analytics ,
                partnerships, brand , intellectual property , market expansion
                talent management ,
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
