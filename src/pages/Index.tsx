
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedShows from "@/components/FeaturedShows";
import LoyaltyProgram from "@/components/LoyaltyProgram";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        <FeaturedShows />
        <LoyaltyProgram />
        <Testimonials />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
