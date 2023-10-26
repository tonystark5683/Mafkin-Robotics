import React from 'react'
import './HBottom.css'
import { HeroData } from "@/src/utils/data";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import pic1 from "./picdemo1.json";
import pic2 from "./picdemo3.json";
import pic3 from "./picdemo2.json";
const HBottom = () => {
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
    <div className="h-bottom-wrapper">
      <div className="h-b-wrapper">
        <div className="h-b-right">

        </div>
        <div className="h-b-left">
        <div className="h-left-inner">
              <div className="tag">Sustainable</div>
              <div className="image-row">
                {HeroData.slice(0, 1).map((person, i) => (
                  <div className="person-pill" key={i}>
                    <motion.div
                      initial={"initial"}
                      animate={"animate"}
                      variants={variants(person.delay)}
                      className="person-pill-bg"
                    >
                      <Lottie animationData={pic1} className="img" />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default HBottom