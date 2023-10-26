import React, { useState } from "react";
import "./WhatWeDo.css";
import { motion } from "framer-motion";
import { containerVariants } from "@/src/utils/animation";
import { desVaraints } from "@/src/utils/animation";
import { tagVaraints } from "@/src/utils/animation";
import Lottie from "lottie-react";
import pic1 from "./fuel.json";
import pic2 from "./efficient.json";
import pic3 from "./sustain.json";
import { Link } from "react-scroll";
const WhatWeDo = () => {
  const [showPopup, setPopup] = useState(false);
  const [showsecondPopup, setsecondPopup] = useState(false);
  const [showthirdPopup, setthirdPopup] = useState(false);
  return (
    <div className="wwd-wrapper">
      <div className="container">
        <div className="wwd-container">
          <div className="wwd-head">
            <motion.span
              variants={tagVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
            >
              Why Choose Us
            </motion.span>
            <motion.span
              variants={desVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="title"
            >
              Efficiency Unleashed, Safety Enhanced, Sustainability Achieved Our Ship Cleaning Revolution
            </motion.span>
            <motion.span
              variants={desVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="des"
            >
              Discovering Our Measure of Excellence
            </motion.span>
          </div>
          <div className="card-section">
            <div className="cards">
              <motion.div
                variants={containerVariants(0.4)}
                initial="offscreen"
                whileInView={"onscreen"}
                className="card"
              >
                <Lottie animationData={pic1} className="img" />
                <h1>Fuel Savings Redefined</h1>
                <p>
                  Our product implements a 20% increase in fuel efficiency,
                  resulting in multi-million-dollar savings per trip.
                </p>
                <button
                  className="button2"
                  type="button"
                  onClick={() => setPopup(true)}
                >
                  Learn More{" "}
                </button>
              </motion.div>
              <motion.div
                variants={containerVariants(0.6)}
                initial="offscreen"
                whileInView={"onscreen"}
                className="card"
              >
                <Lottie animationData={pic3} className="img" />
                <h1>Elevated Cleaning Standards</h1>
                <p>
                  Our product achieves a remarkable 60% increase in cleaning
                  efficiency, significantly reducing ship downtime.
                </p>
                <button
                  className="button2"
                  type="button"
                  onClick={() => setsecondPopup(true)}
                >
                  Learn More
                </button>
              </motion.div>
              <motion.div
                variants={containerVariants(0.8)}
                initial="offscreen"
                whileInView={"onscreen"}
                className="card"
              >
                <Lottie animationData={pic2} className="img" />
                <h1>Eco-Friendly Practices</h1>
                <p>
                  Our product adheres to sustainable waste management,
                  preventing harm to the marine ecosystem and protect vessels .
                </p>
                <button
                  className="button2"
                  type="button"
                  onClick={() => setthirdPopup(true)}
                >
                  Learn More{" "}
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {showPopup ? (
          <div className="modelBox">
            <img src="" alt="" />
            <div className="box">
              <h2 className="tag">Fuel Savings Redefined</h2>
              <p className="text">
              With a 20% increase in fuel efficiency, our product not only saves you millions of dollars per trip but also contributes to a greener, more sustainable approach to marine operations. We are committed to optimizing fuel consumption and financial savings for our clients.</p>
              <div className="b-button">
              <Link to="contact-section" spy={true} smooth={true} offset={-65}><button className="button"onClick={() => setPopup(false)}>Contact Now</button></Link>
                <button
                  onClick={() => setPopup(false)}
                  className="close-button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {showsecondPopup ? (
          <div className="modelBox">
            <img src="" alt="" />
            <div className="box">
              <h2 className="tag">Elevated Cleaning Standards</h2>
              <p className="text">
              Our Autonomous technology has propelled us to achieve an extraordinary 60% increase in cleaning efficiency, significantly reducing ship downtime. This means your vessels spend more time at sea and less in maintenance, ensuring higher productivity and considerable cost savings.
              </p>
              <div className="b-button">
              <Link to="contact-section" spy={true} smooth={true} offset={-65}><button className="button" 
                onClick={() => setsecondPopup(false)}>Contact Now</button></Link>
                <button
                  onClick={() => setsecondPopup(false)}
                  className="close-button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
        {showthirdPopup ? (
          <div className="modelBox">
            <img src="" alt="" />
            <div className="box">
              <h2 className="tag">Eco-Friendly Practices</h2>
              <p className="text">
              Our dedication extends to standardized waste management, preventing harm to the marine ecosystem. We are proud to contribute to preserving the delicate balance of marine life, while also ensuring the protection and longevity of your vessels. Our approach is environmentally conscious and highly effective.
              </p>
              <div className="b-button">
              <Link to="contact-section" spy={true} smooth={true} offset={-65}><button className="button" onClick={() => setthirdPopup(false)}>Contact Now</button></Link>
                <button
                  onClick={() => setthirdPopup(false)}
                  className="close-button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default WhatWeDo;
