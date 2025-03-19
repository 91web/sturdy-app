import React from "react";
import Box from "@mui/material/Box";
import HomeHero from "./components/home-hero";
import LearningPlatform from "./components/learning-platform";
import WhyUs from "./components/why-hero";
import CourseCatalog from "./components/course-log";
import BannerSection from "./components/enrol-hero";
const HomeApp = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <HomeHero />
      <LearningPlatform />
      <WhyUs />
      <CourseCatalog />
      <BannerSection/>
    </Box>
  );
};

export default HomeApp;
