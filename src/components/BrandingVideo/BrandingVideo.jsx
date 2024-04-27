"use client";
import React ,{useRef} from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import './BrandingVideo.css'

const BrandingVideo = () => {
  const ref = useRef(null)

  const {scrollYProgress} = useScroll({
    target: ref,
    offset:["start end" , "end end"]
  })

  const scale = useTransform(scrollYProgress , [0,1] , [.6 , 1])
  return (
    <div className='bv-container' >
        <div className="container">
            <motion.video ref={ref} className='bd-video' loop muted autoPlay controls="" style={{scale}} >
                <source src='/video.mp4' type='video/mp4' />
            </motion.video>
        </div>
    </div>
  )
}

export default BrandingVideo