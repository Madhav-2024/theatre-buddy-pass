
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Calendar, Star, Search } from "lucide-react";
import { Link } from "react-router-dom";

// Mock data for shows
const allShows = [
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
  },
  {
    id: 4,
    title: "Chicago",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "Jun 10 - Aug 20, 2025",
    rating: 4.6,
    category: "Musical",
    price: "$55",
    description: "The sizzling Broadway musical about fame and fortune."
  },
  {
    id: 5,
    title: "The Glass Menagerie",
    image: "https://images.unsplash.com/photo-1533922631510-c004a0098e61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "May 5 - Jun 15, 2025",
    rating: 4.5,
    category: "Drama",
    price: "$40",
    description: "Tennessee Williams' poignant memory play."
  },
  {
    id: 6,
    title: "Wicked",
    image: "https://images.unsplash.com/photo-1562329265-95a6d7a83440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "Jul 1 - Sep 30, 2025",
    rating: 4.9,
    category: "Musical",
    price: "$85",
    description: "The untold story of the witches of Oz."
  }
];

const ShowsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  
  const filteredShows = allShows.filter(show => {
    const matchesSearch = show.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          show.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || show.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-theatre-navy py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Current Shows</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Browse our selection of current and upcoming productions. Find the perfect show for your next theatre visit.
          </p>
        </div>
      </div>
      
      <main className="flex-grow bg-theatre-cream py-12 px-4">
        <div className="container mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  placeholder="Search shows..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="w-full md:w-64">
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="Drama">Drama</SelectItem>
                    <SelectItem value="Musical">Musical</SelectItem>
                    <SelectItem value="Comedy">Comedy</SelectItem>
                    <SelectItem value="Tragedy">Tragedy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          {filteredShows.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No shows found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredShows.map((show) => (
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
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShowsPage;
