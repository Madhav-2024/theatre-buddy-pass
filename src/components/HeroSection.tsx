
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container mx-auto relative z-10 text-white px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Experience the Magic of Live Theatre
          </h1>
          <div className="w-20 h-1 bg-theatre-gold mb-6"></div>
          <p className="text-lg md:text-xl mb-8">
            Book your tickets with TheatreBuddy and enjoy special offers for frequent theatre-goers. The perfect companion for your theatrical journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-theatre-maroon hover:bg-theatre-gold hover:text-theatre-navy transition-colors text-white px-8 py-6">
              <Link to="/shows">Browse Shows</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-theatre-navy transition-colors px-8 py-6">
              <Link to="/special-offers">View Special Offers</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
