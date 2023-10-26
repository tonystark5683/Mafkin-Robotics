import React from "react";
import "./Email.css";
import { motion } from "framer-motion";
import { LuMail } from "react-icons/lu";
import { containerVariants } from "@/src/utils/animation";
const Email = () => {
  return (
    <motion.div
      initial={{
        width: ".5rem",
        borderRadius: "100%",
      }}
      whileInView={{
        width: "70%",
        borderRadius: "999px",
        transition: {
          type: "easeOut",
          duration: 1,
        },
      }}
      className="emailbox"
    >
      <motion.div
        variants={containerVariants(0.6)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
      >
        <LuMail size={30} color="grey" />
      </motion.div>

      <motion.input
        variants={containerVariants(0.7)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        type="email"
        placeholder="Enter Email"
      />

      <motion.div
        variants={containerVariants(0.9)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
          once: true,
        }}
        className="mail-quote"
      >
        Request Qoute
      </motion.div>
    </motion.div>
  );
};

export default Email;
