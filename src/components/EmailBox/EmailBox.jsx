import React from "react";
import "./EmailBox.css";
import { motion } from "framer-motion";
import { LuMail } from "react-icons/lu";
import { containerVariants } from "@/src/utils/animation";
const EmailBox = () => {
  return (
    // icon
    <motion.div
      initial={{
        width: "10rem",
        // borderRadius:"100%",
      }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: "spring",
          duration: 1,
        },
      }}
      className="emailBox"
    >
      <motion.div
        variants={containerVariants(0.5)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
      >
        <LuMail size={30} color="grey" />
      </motion.div>

      {/* input */}

      <motion.input
        variants={containerVariants(1)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{ once: true }}
        type="email"
        placeholder="Enter Email"
        style={{fontFamily:"Josefin Sans, sans-serif"}}
      />

      {/* get funded button */}
      <motion.div className="getFunded">Get Funded</motion.div>
    </motion.div>
  );
};

export default EmailBox;
