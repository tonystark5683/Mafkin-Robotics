import "./OurTeam.css";

import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeIn } from "@/src/utils/animation";
const OurTeam = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1096) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(3);
      }
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="we-wrapper">
      <div className="we">
        <motion.div 
                  variants={fadeIn("up", 0.4)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
        className="ot-container">
        <motion.span
              className="tag"
            >
              &quot;Coming together is a beginning, staying together is progress, and working together is success.&quot;<br/> - Henry Ford
            </motion.span>
            <motion.span
              className="title"
            >
              Meet our Team
            </motion.span>
        </motion.div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={slidesPerView}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          initialSlide={2}
          className="mySwiper"
        >
          <SwiperSlide className="ot-slider">
            <div className="ot-card">
              <div className="ot-image-content">
                <span className="overlay"></span>

                <div className="ot-card-image">
                  <img src="person2.jpg" alt="" className="ot-card-img" />
                </div>
              </div>

              <div className="ot-card-content">
                <h2 className="ot-name">Sarthak Bhaiya</h2>
                <h2 className="ot-Designation">FOUNDER & CEO</h2>
                <p className="ot-Description">
                  {" "}
                  You can slide cards by clicking on the nav button and cursor
                  and I have also added pagination. This project is fully
                  responsive and fits all media device
                </p>
                <div className="ot-social-container">
                  <a href="#" className="social">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="social">
                    <FaFacebookF />
                  </a>
                </div>
                <button className="ot-button">View More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ot-slider">
            <div className="ot-card">
              <div className="ot-image-content">
                <span className="overlay"></span>

                <div className="ot-card-image">
                  <img src="person2.jpg" alt="" className="ot-card-img" />
                </div>
              </div>

              <div className="ot-card-content">
                <h2 className="ot-name">Sarthak Bhaiya</h2>
                <h2 className="ot-Designation">FOUNDER & CEO</h2>
                <p className="ot-Description">
                  {" "}
                  You can slide cards by clicking on the nav button and cursor
                  and I have also added pagination. This project is fully
                  responsive and fits all media device
                </p>
                <div className="ot-social-container">
                  <a href="#" className="social">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="social">
                    <FaFacebookF />
                  </a>
                </div>
                <button className="ot-button">View More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ot-slider">
            <div className="ot-card">
              <div className="ot-image-content">
                <span className="overlay"></span>

                <div className="ot-card-image">
                  <img src="person2.jpg" alt="" className="ot-card-img" />
                </div>
              </div>

              <div className="ot-card-content">
                <h2 className="ot-name">Sarthak Bhaiya</h2>
                <h2 className="ot-Designation">FOUNDER & CEO</h2>
                <p className="ot-Description">
                  {" "}
                  You can slide cards by clicking on the nav button and cursor
                  and I have also added pagination. This project is fully
                  responsive and fits all media device
                </p>
                <div className="ot-social-container">
                  <a href="#" className="social">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="social">
                    <FaFacebookF />
                  </a>
                </div>
                <button className="ot-button">View More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ot-slider">
            <div className="ot-card">
              <div className="ot-image-content">
                <span className="overlay"></span>

                <div className="ot-card-image">
                  <img src="person2.jpg" alt="" className="ot-card-img" />
                </div>
              </div>

              <div className="ot-card-content">
                <h2 className="ot-name">Sarthak Bhaiya</h2>
                <h2 className="ot-Designation">FOUNDER & CEO</h2>
                <p className="ot-Description">
                  {" "}
                  You can slide cards by clicking on the nav button and cursor
                  and I have also added pagination. This project is fully
                  responsive and fits all media device
                </p>
                <div className="ot-social-container">
                  <a href="#" className="social">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="social">
                    <FaFacebookF />
                  </a>
                </div>
                <button className="ot-button">View More</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ot-slider">
            <div className="ot-card">
              <div className="ot-image-content">
                <span className="overlay"></span>

                <div className="ot-card-image">
                  <img src="person2.jpg" alt="" className="ot-card-img" />
                </div>
              </div>

              <div className="ot-card-content">
                <h2 className="ot-name">Sarthak Bhaiya</h2>
                <h2 className="ot-Designation">FOUNDER & CEO</h2>
                <p className="ot-Description">
                  {" "}
                  You can slide cards by clicking on the nav button and cursor
                  and I have also added pagination. This project is fully
                  responsive and fits all media device
                </p>
                <div className="ot-social-container">
                  <a href="#" className="social">
                    <FaTwitter />
                  </a>
                  <a href="#" className="social">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="social">
                    <FaFacebookF />
                  </a>
                </div>
                <button className="ot-button">View More</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default OurTeam;
