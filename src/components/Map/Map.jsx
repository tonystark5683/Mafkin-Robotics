import React from "react";
import "./Map.css";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { fadeIn } from "@/src/utils/animation";
import temp from "./location2.json";
const Map = () => {
  return (
    <div className="m-wrapper">
      <div className="m-container">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="m-left"
        >
          <motion.span className="tag">Our Serviced Ports</motion.span>
          <motion.span className="text">
            Delve into the ports we currently service and explore our
            comprehensive range of offerings tailored to these specific maritime
            hubs.
          </motion.span>
          <Lottie animationData={temp} className="lottie" />
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="m-right"
        >
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1DFTRF0-fs3CiHNYcbUX3IY4zHD8hHgw&ehbc=2E312F&noprof=1"
            className="map"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Map;
