import React from "react";
import "../index.css";
import HeroSection from "../Components/HeroSection";
import SectionToday from "../Components/SectionToday";
import SectionCategoties from "../Components/SectionCategories";
import SectionMonth from "../Components/SectionMonth";
import SectionProduct from "../Components/SectionProduct";
import ArrivalSection from "../Components/ArrivalSection";
import SectionService from "../Components/SectionService";
import SectionHero from "../Components/HeroSection2";


const HomePage = () => {
  return (
    <div className="max-w-screen-xl container mx-auto">
     
    <HeroSection/>

    <SectionToday/>

    <SectionCategoties/>
    
    <SectionMonth/>

    <SectionHero/>

    <SectionProduct/>

    <ArrivalSection/>

     <SectionService/>
     
      

    
     
    </div>
  );
};

export default HomePage;
