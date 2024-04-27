import React from "react";
import "./WhoWeInvest.css";
import { motion } from "framer-motion";
import { features, whoWeInvest } from "@/src/utils/data";
import {
  containerVariants,
  tagVaraints,
  titleVaraints,
} from "@/src/utils/animation";
const WhoWeInvest = () => {
  return (
    <div className="wwi-wrapper">
      <div className="container">
        <div className="wwi-container">
          {/* left side */}
          <div className="wwi-left">
            <div className="head">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVaraints}
                className="tag"
              >
                {" "}
                who we invest in
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVaraints}
                className="title"
              >
                Digial businesses
                <br /> with early traction
              </motion.span>
            </div>

            {/* features */}
            <div className="wwi-features">
              {whoWeInvest.map((feature, i) => (
                <motion.div
                  initial="offscreen"
                  whileInView={"onscreen"}
                  variants={containerVariants(i * 0.0 + 1)}
                  className="wwi-feature"
                  key={i}
                >
                  <span className="des">{feature.title}</span>
                  <span className="text">{feature.des}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* right side */}
          <div className="wwi-right">
            <img src="persons.png" alt="persons" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeInvest;
