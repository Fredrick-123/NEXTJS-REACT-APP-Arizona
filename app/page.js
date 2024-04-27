"use client";
import Navbar from "@/src/components/Navbar/Navbar";
import "./page.css";
import Hero from "@/src/components/Hero/Hero";
import BrandingVideo from "@/src/components/BrandingVideo/BrandingVideo";
import WhatWeDo from "@/src/components/WhatWeDo/WhatWeDo";
import OurDiff from "@/src/components/OurDiff/OurDiff";
import { motion, useAnimation } from "framer-motion";
import HowItWorks from "@/src/components/HowItWorks/HowItWorks";
import WhoWeInvest from "@/src/components/WhoWeInvest/WhoWeInvest";
import Testimonial from "@/src/components/Testimonials/Testimonial";
import Footer from "@/src/components/Footer/Footer";
export default function Home() {
  const controls = useAnimation();
  return (
    <div>
      <motion.div className="app" animate={controls}>
        <Navbar />
        <Hero />
        <BrandingVideo />
        <WhatWeDo />

        <motion.div
          onViewportEnter={() =>
            controls.start({
              backgroundColor: "var(--secondary-color)",
            })
          }
          onViewportLeave={() =>
            controls.start({
              backgroundColor: "white",
            })
          }
          viewport={{ amount: 0.4 }}
        >
          <OurDiff />
        </motion.div>

        <HowItWorks />

        <motion.div
          onViewportEnter={() =>
            controls.start({
              backgroundColor: "var(--primary-color)",
            })
          }
          onViewportLeave={() =>
            controls.start({
              backgroundColor: "white",
            })
          }
          viewport={{ amount: 0.4 }}
        >
          <WhoWeInvest />
        </motion.div>

        <Testimonial />
        <Footer />
      </motion.div>
    </div>
  );
}
