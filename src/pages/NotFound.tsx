
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-theatre-cream flex items-center">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-theatre-navy font-playfair">404</h1>
          <div className="w-16 h-1 bg-theatre-gold mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-lg mx-auto">
            Oops! It seems like the show you're looking for is no longer playing.
          </p>
          <Button size="lg" className="bg-theatre-maroon hover:bg-theatre-gold hover:text-theatre-navy">
            <Link to="/">Return to Main Stage</Link>
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
