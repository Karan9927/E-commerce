import React from "react";
import Hero from "../../Components/Sections/Hero";
import Products from "../../Components/FeaturedProducts/Products";
import NewArrival from "../../Components/NewArrival/NewArrival";
import Testomonials from "../../Components/Testimonials/Testomonials";
import OurImpact from "../../Components/Sections/OurImpact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Products />
      <NewArrival />
      <Testomonials />
      <OurImpact />
    </div>
  );
};

export default Home;
