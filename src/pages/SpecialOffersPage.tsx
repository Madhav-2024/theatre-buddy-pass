
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoyaltyProgram from "@/components/LoyaltyProgram";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

// Special offers data
const specialOffers = [
  {
    id: 1,
    title: "Early Bird Discount",
    description: "Get 15% off when you book tickets at least 30 days in advance for any show.",
    validUntil: "Ongoing",
    code: "EARLYBIRD15",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tier: "All Members"
  },
  {
    id: 2,
    title: "Weekend Special",
    description: "Book two or more tickets for any weekend show and receive a complimentary program.",
    validUntil: "May 31, 2025",
    code: "WEEKEND2023",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tier: "All Members"
  },
  {
    id: 3,
    title: "Bronze Member Discount",
    description: "10% off any performance for Bronze tier members in our loyalty program.",
    validUntil: "Ongoing",
    code: "BRONZE10",
    image: "https://images.unsplash.com/photo-1468164016595-6108e4c60c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tier: "Bronze"
  },
  {
    id: 4,
    title: "Silver Member Discount",
    description: "20% off any performance and a free beverage for Silver tier members.",
    validUntil: "Ongoing",
    code: "SILVER20",
    image: "https://images.unsplash.com/photo-1560845122-d5cadfa5c19b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tier: "Silver"
  },
  {
    id: 5,
    title: "Gold Member Discount",
    description: "30% off any performance, VIP package, and complimentary ticket upgrades for Gold tier members.",
    validUntil: "Ongoing",
    code: "GOLD30",
    image: "https://images.unsplash.com/photo-1507676385008-e7fb562d11f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tier: "Gold"
  },
  {
    id: 6,
    title: "Group Booking Discount",
    description: "Book 10 or more tickets and receive a 25% discount on your entire order.",
    validUntil: "Ongoing",
    code: "GROUP25",
    image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tier: "All Members"
  }
];

const SpecialOffersPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-theatre-navy py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Special Offers</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover exclusive discounts and promotions for theatre lovers. Our regular visitors enjoy even more benefits through our loyalty program.
          </p>
        </div>
      </div>
      
      <main className="flex-grow bg-theatre-cream py-12 px-4">
        <div className="container mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center font-playfair">Current Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {specialOffers.map((offer) => (
                <Card key={offer.id} className="overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img src={offer.image} alt={offer.title} className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" />
                    <Badge 
                      className={`absolute top-4 right-4 ${
                        offer.tier === "Gold" 
                          ? "bg-theatre-gold text-theatre-navy" 
                          : offer.tier === "Silver" 
                          ? "bg-[#c0c0c0] text-theatre-navy" 
                          : offer.tier === "Bronze" 
                          ? "bg-[#cd7f32] text-white" 
                          : "bg-theatre-navy text-white"
                      }`}
                    >
                      {offer.tier}
                    </Badge>
                  </div>
                  
                  <CardHeader>
                    <h3 className="text-xl font-bold font-playfair">{offer.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Valid until: {offer.validUntil}</span>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-3">{offer.description}</p>
                    <div className="flex items-center bg-gray-100 p-2 rounded">
                      <Ticket className="h-4 w-4 mr-2 text-theatre-maroon" />
                      <span className="font-mono font-bold">{offer.code}</span>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button className="w-full bg-theatre-navy hover:bg-theatre-gold hover:text-theatre-navy transition-colors">
                      <Link to="/shows">Browse Shows</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          <LoyaltyProgram />
          
          <div className="bg-white p-8 rounded-lg shadow-md mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4 font-playfair">How to Redeem Offers</h2>
            <p className="mb-6 text-gray-600">
              Simply enter the offer code during checkout when booking your tickets online. 
              For loyalty program discounts, make sure you're logged into your account.
            </p>
            <p className="text-sm text-gray-500">
              All offers are subject to availability and cannot be combined with other promotions. 
              Terms and conditions apply.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SpecialOffersPage;
