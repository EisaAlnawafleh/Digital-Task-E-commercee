"use client";
import About_Body from "../components/About_Body";
import TimeLine from "../components/Timeline";
import MissionVision from "../components/MissionVision";
import Stats from "../components/Stats";
import Team from "../components/Team";
import Features from "../components/Features";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div style={{ background: "var(--bg)" }}
    className="flex flex-col gap-5"
    >
      <About_Body />
      <TimeLine />
      <MissionVision />
      <Features />
      <Stats />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
};

export default About;
