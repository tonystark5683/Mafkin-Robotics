"use client";
import Navbar from "@/src/components/Navbar/Navbar";
import "./App.css";
import Hero from "@/src/components/Hero/Hero";
import BrandingVedio from "@/src/components/BrandingVedio/BrandingVedio";
import WhatWeDo from "@/src/components/WhatWeDo/WhatWeDo";
import OurDiff from "@/src/components/OurDiff/OurDiff";
import { motion, useAnimation } from "framer-motion";
import Section from "@/src/components/Section/Section";
import Partner from "@/src/components/Partners/Partner";
import Faq from "@/src/components/Faq/Faq";
import Footer from "@/src/components/Footer/Footer";
import OurProcess from "@/src/components/OurProcess/OurProcess";
import OurTeam from "@/src/components/OurTeam/OurTeam";
import Map from "@/src/components/Map/Map";
import GoToTop from "@/src/components/GoToTop/GoToTop";
import Contact from "@/src/components/Contact/Contact";
import HBottom from "@/src/components/HBottom/HBottom";
import AboutUs from "@/src/components/AboutUs/AboutUs";
import Timeline from "@/src/components/Timeline/Timeline";
export default function Home() {
  const controls = useAnimation();

  return (
    <motion.div className="app" animate={controls}>
      <Navbar />
      {/* <AboutUs/> */}
      <Hero />
      <HBottom />
      
      {/* <BrandingVedio /> */}
      <Section />
      <div className="ocean-bg1">
        <WhatWeDo />
        {/* <OurDiff /> */}
      </div>

      
        <OurProcess />
        {/* <Partner /> */}
        <Map />
        <div className="ocean-bg2">
        <Timeline/></div>
        {/* <Faq /> */}
        <OurTeam />
      
      <Contact />
      <GoToTop />
      <Footer />
    </motion.div>
  );
}
