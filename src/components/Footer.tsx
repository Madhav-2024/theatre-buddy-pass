
import React from "react";
import { Link } from "react-router-dom";
import { Ticket, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-theatre-navy text-white pt-12 pb-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <div className="flex items-center space-x-2 mb-4">
            <Ticket className="text-theatre-gold h-6 w-6" />
            <span className="font-playfair text-xl font-bold">TheatreBuddy</span>
          </div>
          <p className="text-sm text-gray-300 mb-4">
            Your ultimate destination for theatre ticket booking with special benefits for our regular visitors.
          </p>
        </div>
        
        <div className="md:col-span-1">
          <h3 className="font-playfair text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-300 hover:text-theatre-gold transition-colors">Home</Link></li>
            <li><Link to="/shows" className="text-gray-300 hover:text-theatre-gold transition-colors">Current Shows</Link></li>
            <li><Link to="/special-offers" className="text-gray-300 hover:text-theatre-gold transition-colors">Special Offers</Link></li>
            <li><Link to="/contact" className="text-gray-300 hover:text-theatre-gold transition-colors">Contact</Link></li>
            <li><Link to="/my-account" className="text-gray-300 hover:text-theatre-gold transition-colors">My Account</Link></li>
          </ul>
        </div>
        
        <div className="md:col-span-1">
          <h3 className="font-playfair text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 text-theatre-gold shrink-0 mt-0.5" />
              <span className="text-sm text-gray-300">123 Broadway Ave, Theatre District, New York, NY 10001</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-theatre-gold" />
              <span className="text-sm text-gray-300">(555) 123-4567</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-theatre-gold" />
              <span className="text-sm text-gray-300">info@theatrebuddy.com</span>
            </li>
          </ul>
        </div>
        
        <div className="md:col-span-1">
          <h3 className="font-playfair text-lg font-bold mb-4">Newsletter</h3>
          <p className="text-sm text-gray-300 mb-4">Subscribe to get updates on new shows and special offers.</p>
          <form className="flex flex-col space-y-2">
            <input 
              type="email" 
              placeholder="Your email" 
              className="px-4 py-2 bg-theatre-navy border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-theatre-gold"
            />
            <button type="submit" className="bg-theatre-maroon hover:bg-theatre-gold hover:text-theatre-navy transition-colors px-4 py-2 rounded-md text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="container mx-auto mt-8 pt-6 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 TheatreBuddy. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-theatre-gold">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-theatre-gold">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-theatre-gold">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
