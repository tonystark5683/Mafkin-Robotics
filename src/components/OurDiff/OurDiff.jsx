import React, { useState } from "react";
import "./OurDiff.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RiPlayCircleLine } from 'react-icons/ri'; 
import ReactPlayer from "react-player";

import {
  desVaraints,
  tagVaraints,
  titleVaraints,
  fadeIn,
} from "@/src/utils/animation";
const OurDiff = () => {
  //   const [activeSlide, setActiveSlide] = useState(0);
  // const settings = {
  //   className: "center",
  //   dots: true,
  //   fade: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  // };
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  const [showVideo, setShowVideo] = useState(false);
  const data = [
    {
      icon: "/OurDiff/pic1.jpg",
      title: "Best Automation Robots",
      des: "Our mission is to level the playing field for early stage growth capital. We provide capital that We provide capital that We provide that that capital that ",
    },
    {
      icon: "/OurDiff/pic3.jpg",
      title: "Mutliple Ports Availability",
      des: "On demand expertise to supercharge growth in areas that are hard to access for early stage founders We provide capital that  that We that provide capital that",
    },
    {
      icon: "/OurDiff/pic3.jpeg",
      title: "Ease In process",
      des: "Funding that flexes as revenue grows with transparent costs and does not require dilution, personal We provide capital that We provide capital that ",
    },
  ];

  return (
    <div className="od-wrapper">
      <div className="container">
        <div className="od-container">
          <div className="od-head">
            <motion.span
              variants={tagVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
              className="tag"
            >
              Our Offerings
            </motion.span>
          </div>
          <div className="od-bottom">
            <motion.div 
                      variants={fadeIn("right", 0.4)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
            className="od-vedio">
              <div className="choose__img">
                {showVideo ? (
                  <ReactPlayer
                    url="https://www.youtube.com/embed/2pvCgap7bSg?si=UGwGWO2NlsOg8M5e"
                    controls
                    width="100%"
                    height="350px"
                  />
                ) : (
                  <img src="ouroff1.jpg" alt="" />
                )}

                {!showVideo && (
                  <span className="play__icon">
                    <RiPlayCircleLine className="o-icon" onClick={() => setShowVideo(!showVideo) }/>
                  </span>
                )}
              </div>
            </motion.div>
            <motion.div 
                      variants={fadeIn("left", 0.4)}
                      initial="hidden"
                      whileInView={"show"}
                      viewport={{ once: false, amount: 0.7 }}
            className="od-slider">
              <Slider {...settings} className="od-bottom-slider">
                <div>
                  <div className="od-slider-content">
                    <span className="tag">Best Automation Robots</span>
                    <br />
                    <span className="text">
                      Mafkin Robotics pioneers user-friendly automation robots,
                      transforming industrial operations. With a focus on
                      precision and efficiency, our technology simplifies
                      complex tasks, integrating seamlessly across diverse
                      sectors, and driving enhanced productivity in an
                      ever-evolving business landscape.
                    </span>

                    <div className="od-slider-button">
                      <button>Explore More</button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="od-slider-content">
                    <span className="tag">Multiple Ports Availability</span>
                    <br />
                    <span className="text">
                      Our company facilitates effortless navigation across
                      multiple ports through advanced solutions, ensuring
                      efficient and convenient access to shipping
                      channels. Our logistics management
                      streamlines operations, guaranteeing reliable connectivity
                      and optimized performance for seamless maritime endeavors
                      and global connectivity.
                    </span>
                    <div className="od-slider-button">
                      <button>Explore More</button>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="od-slider-content">
                    <span className="tag">Ease In Process</span>
                    <br />
                    <span className="text">
                      At Mafkin Robotics, we prioritize simplicity in complex
                      procedures, providing streamlined solutions to optimize
                      workflow efficiency. Our innovative tools and user-centric
                      approach offer a hassle-free experience, fostering
                      enhanced productivity and seamless management throughout
                      every stage of your operational process.
                    </span>
                    <div className="od-slider-button">
                      <button>Explore More</button>
                    </div>
                  </div>
                </div>
              </Slider>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurDiff;
