import React from "react";
import "./OurProcess.css";
import { motion } from "framer-motion";
import { tagVaraints, titleVaraints, desVaraints } from "@/src/utils/animation";
const OurProcess = () => {
  return (
    <div className="op-wrapper">
      <div className="op-container">
        <div className="op-left">
      
          <motion.span
            variants={tagVaraints}
            initial="offscreen"
            whileInView={"onscreen"}
            className="tag"
          >
            How It Works ?
          </motion.span>
          <motion.span
            variants={desVaraints}
            initial="offscreen"
            whileInView={"onscreen"}
            className="text"
          >
            You continue with your operations,
            <br />
            we handle our part.
          </motion.span>
        </div>
        <div className="op-right">
          <div className="o-qa">
            <input type="checkbox" id="o-collapsible-head-1" />
            <label for="o-collapsible-head-1">Booking</label>
            <div className="o-collapsible-text-1">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit odit similique doloremque ab unde. Placeat
                recusandae nobis voluptate atque, fugit itaque nam quos.
              </p>
            </div>
          </div>
          <div className="o-qa">
            <input type="checkbox" id="o-collapsible-head-2" />
            <label for="o-collapsible-head-2">Operation</label>
            <div className="o-collapsible-text-2">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit odit similique doloremque ab unde. Placeat
                recusandae nobis voluptate atque, fugit itaque nam quos.
              </p>
            </div>
          </div>
          <div className="o-qa">
            <input type="checkbox" id="o-collapsible-head-3" />
            <label for="o-collapsible-head-3">Report</label>
            <div className="o-collapsible-text-3">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit odit similique doloremque ab unde. Placeat
                recusandae nobis voluptate atque, fugit itaque nam quos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
