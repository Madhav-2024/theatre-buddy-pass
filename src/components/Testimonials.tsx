
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Theatre Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "TheatreBuddy has completely transformed my theatre experience. The loyalty program is fantastic - I've saved hundreds on tickets since becoming a Gold member. The customer service is exceptional too!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Silver Tier Member",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    rating: 4,
    text: "I love the priority booking window that comes with my Silver membership. It's so easy to get great seats for popular shows before they sell out. The discounts are a wonderful bonus too!"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Gold Tier Member",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    rating: 5,
    text: "As a theatre lover who attends shows at least twice a month, the Gold tier benefits are incredible. Complimentary upgrades and VIP access make every visit special. I recommend TheatreBuddy to everyone!"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-theatre-navy">What Our Members Say</h2>
          <div className="w-24 h-1 bg-theatre-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our loyal theatre-goers who have experienced the benefits of our loyalty program.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8">
                <div className="flex flex-col items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-20 h-20 rounded-full object-cover border-4 border-theatre-cream mb-4"
                  />
                  <h3 className="font-bold font-playfair text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "text-theatre-gold fill-theatre-gold" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 text-center italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
