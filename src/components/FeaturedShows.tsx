
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for shows
const featuredShows = [
  {
    id: 1,
    title: "Hamlet",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "Apr 15 - May 30, 2025",
    rating: 4.8,
    category: "Drama",
    price: "$45",
    description: "Shakespeare's classic tragedy about the Prince of Denmark."
  },
  {
    id: 2,
    title: "The Phantom of the Opera",
    image: "https://images.unsplash.com/photo-1495345679725-2322fdced5bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "May 1 - Jun 30, 2025",
    rating: 4.9,
    category: "Musical",
    price: "$65",
    description: "The longest-running show in Broadway history."
  },
  {
    id: 3,
    title: "The Lion King",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "Apr 20 - Jul 15, 2025",
    rating: 4.7,
    category: "Musical",
    price: "$75",
    description: "Award-winning musical based on the beloved Disney film."
  }
];

const FeaturedShows = () => {
  return (
    <section className="py-16 bg-theatre-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-theatre-charcoal">Featured Shows</h2>
          <div className="w-24 h-1 bg-theatre-gold mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the best of theatre with our handpicked selection of must-see performances.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredShows.map((show) => (
            <Card key={show.id} className="overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-64 overflow-hidden">
                <img src={show.image} alt={show.title} className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" />
                <Badge className="absolute top-4 left-4 bg-theatre-gold text-theatre-navy">{show.category}</Badge>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold font-playfair">{show.title}</h3>
                  <div className="flex items-center bg-theatre-navy text-white px-2 py-1 rounded">
                    <Star className="h-4 w-4 mr-1 fill-theatre-gold stroke-theatre-gold" />
                    <span>{show.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{show.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{show.description}</p>
                <p className="text-theatre-maroon font-bold mt-2">From {show.price}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-theatre-navy hover:bg-theatre-gold hover:text-theatre-navy transition-colors">
                  <Link to={`/show/${show.id}`}>Book Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-theatre-navy text-theatre-navy hover:bg-theatre-navy hover:text-white">
            <Link to="/shows">View All Shows</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedShows;
