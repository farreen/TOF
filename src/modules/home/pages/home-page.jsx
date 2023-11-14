import React from "react";
import CarouselFeatured from "../../../components/home/carousel-featured";
import TalesOfStartups from "../../../components/home/tales-of-startups";
import BlogsSection from "../../../components/home/blogs-section";
import InfographicsSection from "../../../components/home/infographic-section";

const HomePage = () => {
  return (
    <>
      <CarouselFeatured />
      <TalesOfStartups />
      <BlogsSection/>
      <InfographicsSection/>
    </>
  );
};

export default HomePage;
