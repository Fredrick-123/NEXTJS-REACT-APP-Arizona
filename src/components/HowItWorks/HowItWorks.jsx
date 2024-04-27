import React from "react";
import "./HowItWorks.css";
import { motion } from "framer-motion";
import { hitFeatures } from "@/src/utils/data";
import Image from "next/image";
import { tagVaraints, titleVaraints } from "@/src/utils/animation";
const HowItWorks = () => {
  const featureVariants = {
    offscreen: {
      scale: 0.5,
    },
    onscreen: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 1.5,
      },
    },
  };

  return (
    <div>
      <div className="hiw-wrapper">
        <div className="container">
          <div className="hiw-container">
            {/* head */}

            <div className="hiw-head">
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={tagVaraints}
                className="tag"
              >
                How it works
              </motion.span>
              <motion.span
                initial="offscreen"
                whileInView={"onscreen"}
                variants={titleVaraints}
                className="title"
              >
                Unlocking potential along the growth journey
              </motion.span>
            </div>

            <div className="hiw-features">
              {hitFeatures.map((feature, i) => {
                return (
                  <motion.div
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={featureVariants}
                    key={i}
                    className="hiw-feature"
                  >
                    {/* leftside */}
                    <motion.div
                      initial={{
                        opacity: 0,
                        x: -100,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          type: "easeIn",
                          duration: 1,
                          delay: 0.7,
                        },
                      }}
                      className="detail"
                    >
                      <span className="des">0{i + 1}</span>
                      <span className="sec-title">{feature.title}</span>
                      <span className="text">{feature.des}</span>
                    </motion.div>
                    {/* rightside */}
                    <div className="icon">
                      <Image
                        src={feature.icon}
                        alt="features-icon"
                        width={128}
                        height={128}
                        style={{ translate: "50% 0rem" }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
