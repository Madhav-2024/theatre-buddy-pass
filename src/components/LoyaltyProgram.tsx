
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Ticket, Award, Star, Calendar, User, Users } from "lucide-react";

const LoyaltyProgram = () => {
  return (
    <section className="py-16 bg-theatre-navy text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">TheatreBuddy Loyalty Program</h2>
          <div className="w-24 h-1 bg-theatre-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Enjoy exclusive benefits and special offers when you become a regular visitor. The more shows you attend, the more rewards you earn!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-b from-theatre-charcoal to-theatre-navy border-0 overflow-hidden">
            <div className="h-2 bg-[#cd7f32]"></div>
            <CardContent className="pt-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#cd7f32] flex items-center justify-center">
                  <Ticket className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-white">Bronze Tier</h3>
              <p className="text-center text-gray-300 mb-6">For those who attend 3-5 shows per year</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-[#cd7f32] mr-2" />
                  <span>10% off select performances</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-[#cd7f32] mr-2" />
                  <span>Free program booklet</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-[#cd7f32] mr-2" />
                  <span>Access to Bronze lounges</span>
                </li>
              </ul>
              <Button className="w-full bg-[#cd7f32] hover:bg-[#b87333] text-white">
                <Link to="/special-offers">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-b from-theatre-charcoal to-theatre-navy border-0 overflow-hidden relative transform scale-105 shadow-xl">
            <div className="absolute top-0 right-0 bg-theatre-gold text-theatre-navy font-bold px-4 py-1 z-10">
              Most Popular
            </div>
            <div className="h-2 bg-[#c0c0c0]"></div>
            <CardContent className="pt-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-[#c0c0c0] flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-white">Silver Tier</h3>
              <p className="text-center text-gray-300 mb-6">For those who attend 6-9 shows per year</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-[#c0c0c0] mr-2" />
                  <span>20% off select performances</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-[#c0c0c0] mr-2" />
                  <span>Free program & beverage</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-[#c0c0c0] mr-2" />
                  <span>Priority booking window</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-[#c0c0c0] mr-2" />
                  <span>Access to Silver lounges</span>
                </li>
              </ul>
              <Button className="w-full bg-[#c0c0c0] hover:bg-[#a8a8a8] text-theatre-navy font-bold">
                <Link to="/special-offers">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-b from-theatre-charcoal to-theatre-navy border-0 overflow-hidden">
            <div className="h-2 bg-theatre-gold"></div>
            <CardContent className="pt-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-theatre-gold flex items-center justify-center">
                  <Award className="h-8 w-8 text-theatre-navy" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-2 text-white">Gold Tier</h3>
              <p className="text-center text-gray-300 mb-6">For those who attend 10+ shows per year</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-theatre-gold mr-2" />
                  <span>30% off all performances</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-theatre-gold mr-2" />
                  <span>VIP package included</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-theatre-gold mr-2" />
                  <span>Advanced priority booking</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-theatre-gold mr-2" />
                  <span>Complimentary ticket upgrades</span>
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-theatre-gold mr-2" />
                  <span>Access to Gold lounges</span>
                </li>
              </ul>
              <Button className="w-full bg-theatre-gold hover:bg-amber-400 text-theatre-navy font-bold">
                <Link to="/special-offers">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl mb-6">Join our Loyalty Program today and start earning rewards!</p>
          <Button size="lg" className="bg-theatre-maroon hover:bg-theatre-gold hover:text-theatre-navy transition-colors">
            <Link to="/my-account">Sign Up Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyProgram;
