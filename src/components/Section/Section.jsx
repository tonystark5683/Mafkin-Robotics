import React from "react";
import "./Section.css";
import { motion } from "framer-motion";
import { containerVariants } from "@/src/utils/animation";
import { desVaraints } from "@/src/utils/animation";
import { tagVaraints } from "@/src/utils/animation";
import { fadeIn } from "@/src/utils/animation";
import Lottie from "lottie-react";
import about from "./about.json";
const Section = () => {
  return (
    <div className="section">
      <div className="inner-section">
        <div className="section-text">
          <h5>
            <motion.span
              variants={tagVaraints}
              initial="offscreen"
              whileInView={"onscreen"}
            >
              OUR MISSION
            </motion.span>
          </h5>

          <motion.span
            variants={desVaraints}
            initial="offscreen"
            whileInView={"onscreen"}
            className="text"
          >
            Our mission is to revolutionize the maritime sector by automating
            ship hull cleaning, addressing the drawbacks of manual methods and
            enhancing fuel efficiency and effectiveness in ship maintenance.
            This contributes to a more sustainable and streamlined maritime
            industry easing operations in Ship Husbandry.
          </motion.span>

          <motion.div
            variants={containerVariants(0.6)}
            initial="offscreen"
            whileInView={"onscreen"}
            className="s-button"
          >
            Explore More
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="section-image"
        >
          <Lottie animationData={about} className="img" />
        </motion.div>
      </div>
    </div>
  );
};

export default Section;
