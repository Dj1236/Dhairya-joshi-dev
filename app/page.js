"use client";
import { personalData } from "../utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import { useEffect, useState } from "react";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Blobity from "blobity";
import { initialBlobityOptions } from "../utils/BlobityConfig";
import useBlobity from "blobity/lib/react/useBlobity";
// import IntroAnimation from "./components/IntroAnimation"; // Import IntroAnimation

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-ignore for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }

    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 8000); // duration in milliseconds

    return () => clearTimeout(timer);
  }, [blobityInstance]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  }, []);

  return (
    <>
      
        <>
          <HeroSection />
          <AboutSection />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Blog />
          <ContactSection />
        </>
      
    </>
  );
}
