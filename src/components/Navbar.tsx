
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Ticket } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-theatre-navy text-white p-4 shadow-md z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Ticket className="text-theatre-gold h-8 w-8" />
          <span className="font-playfair text-xl font-bold">TheatreBuddy</span>
        </Link>
        
        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-theatre-navy p-4 shadow-md flex flex-col gap-2 animate-fade-in">
                <Link to="/" className="hover:text-theatre-gold py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
                <Link to="/shows" className="hover:text-theatre-gold py-2" onClick={() => setIsMenuOpen(false)}>Shows</Link>
                <Link to="/special-offers" className="hover:text-theatre-gold py-2" onClick={() => setIsMenuOpen(false)}>Special Offers</Link>
                <Link to="/contact" className="hover:text-theatre-gold py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                <Link to="/my-account" className="hover:text-theatre-gold py-2" onClick={() => setIsMenuOpen(false)}>My Account</Link>
                <Button variant="default" className="bg-theatre-maroon hover:bg-theatre-gold hover:text-theatre-navy">
                  Book Now
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-theatre-gold transition-colors">Home</Link>
            <Link to="/shows" className="hover:text-theatre-gold transition-colors">Shows</Link>
            <Link to="/special-offers" className="hover:text-theatre-gold transition-colors">Special Offers</Link>
            <Link to="/contact" className="hover:text-theatre-gold transition-colors">Contact</Link>
            <Link to="/my-account" className="hover:text-theatre-gold transition-colors">My Account</Link>
            <Button variant="default" className="bg-theatre-maroon hover:bg-theatre-gold hover:text-theatre-navy transition-colors">
              Book Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
