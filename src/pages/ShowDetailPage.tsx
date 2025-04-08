
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Star, 
  Info, 
  User,
  Plus, 
  Minus 
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

// Mock data for shows
const shows = [
  {
    id: 1,
    title: "Hamlet",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "Apr 15 - May 30, 2025",
    times: ["2:00 PM", "7:30 PM"],
    location: "Grand Theatre",
    address: "123 Broadway, New York, NY",
    rating: 4.8,
    category: "Drama",
    ageRating: "12+",
    duration: "2h 45m",
    basePrice: 45,
    description: "Shakespeare's classic tragedy about the Prince of Denmark, Hamlet, who discovers that his uncle murdered his father and took the throne. Hamlet's mother has also remarried to the new king. Hamlet must decide whether to seek revenge or try to restore justice.",
    longDescription: "Hamlet, considered among the most powerful and influential works of world literature, explores themes of revenge, madness, corruption, and moral corruption. Prince Hamlet is called to Denmark from Germany to attend his father's funeral. He remains in Denmark because his uncle has claimed the throne and married his mother. When his father's ghost appears to him and tells him that he was murdered by Claudius, Hamlet plans revenge. This play is notable for soliloquies like 'To be or not to be' which explores Hamlet's moral struggle and contemplation of life and death.",
    ticketTypes: [
      { name: "Standard", price: 45 },
      { name: "Premium", price: 75 },
      { name: "VIP Box", price: 120 },
    ],
    cast: [
      { name: "John Smith", role: "Hamlet" },
      { name: "Sarah Johnson", role: "Ophelia" },
      { name: "Michael Williams", role: "Claudius" },
      { name: "Emma Davis", role: "Gertrude" }
    ],
    reviews: [
      { author: "Theatre Weekly", quote: "A breathtaking production that reinvents the classic for modern audiences.", rating: 5 },
      { author: "Drama Review", quote: "John Smith delivers a Hamlet for the ages in this must-see production.", rating: 4 }
    ]
  },
  {
    id: 2,
    title: "The Phantom of the Opera",
    image: "https://images.unsplash.com/photo-1495345679725-2322fdced5bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "May 1 - Jun 30, 2025",
    times: ["1:30 PM", "7:00 PM"],
    location: "Majestic Theatre",
    address: "245 West 44th St, New York, NY",
    rating: 4.9,
    category: "Musical",
    ageRating: "10+",
    duration: "2h 30m",
    basePrice: 65,
    description: "The longest-running show in Broadway history, this Andrew Lloyd Webber musical is a tale of love and obsession set in the Paris Opera House.",
    longDescription: "Based on the French novel by Gaston Leroux, The Phantom of the Opera tells the story of a masked figure who lurks beneath the catacombs of the Paris Opera House, exercising a reign of terror over all who inhabit it. He falls madly in love with an innocent young soprano, Christine, and devotes himself to creating a new star by nurturing her extraordinary talents and by employing all of the devious methods at his command. Its sensational score includes 'Think of Me,' 'Angel of Music,' 'Music of the Night,' 'All I Ask of You,' 'Masquerade' and the title song.",
    ticketTypes: [
      { name: "Standard", price: 65 },
      { name: "Premium", price: 95 },
      { name: "VIP Box", price: 150 },
    ],
    cast: [
      { name: "Richard Hamilton", role: "The Phantom" },
      { name: "Emily Chen", role: "Christine Daaé" },
      { name: "David Wilson", role: "Raoul" },
      { name: "Patricia Lopez", role: "Carlotta" }
    ],
    reviews: [
      { author: "Musical Theatre Review", quote: "After all these years, still the most spectacular musical in the West End.", rating: 5 },
      { author: "Broadway Critic", quote: "The music of the night continues to enchant and entrance.", rating: 5 }
    ]
  },
  {
    id: 3,
    title: "The Lion King",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    date: "Apr 20 - Jul 15, 2025",
    times: ["2:30 PM", "8:00 PM"],
    location: "Minskoff Theatre",
    address: "200 W 45th St, New York, NY",
    rating: 4.7,
    category: "Musical",
    ageRating: "All Ages",
    duration: "2h 30m",
    basePrice: 75,
    description: "Award-winning musical based on the beloved Disney film. Follow Simba's epic journey to become king of the Pride Lands.",
    longDescription: "Winner of six Tony Awards, including Best Musical, The Lion King continues to amaze with stunning visuals and powerful storytelling. Director Julie Taymor's vision blends elements of African art and Broadway artisanship to depict anthropomorphic animals. The musical tells the story of Simba, a young lion who must overcome the loss of his father and his villainous uncle, Scar, to claim his rightful throne as King of the Pride Lands. Elton John and Tim Rice's music from the original film is supplemented with three new songs and additional music by Lebo M, Mark Mancina, Jay Rifkin, and Hans Zimmer.",
    ticketTypes: [
      { name: "Standard", price: 75 },
      { name: "Premium", price: 110 },
      { name: "VIP Box", price: 180 },
    ],
    cast: [
      { name: "Kevin Jones", role: "Simba" },
      { name: "Nala Washington", role: "Nala" },
      { name: "Marcus Johnson", role: "Mufasa" },
      { name: "Timothy Green", role: "Scar" }
    ],
    reviews: [
      { author: "New York Times", quote: "A perfect marriage of entertainment and art.", rating: 5 },
      { author: "Theatre Today", quote: "The breathtaking spectacle continues to thrill audiences of all ages.", rating: 4 }
    ]
  }
];

const ShowDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [show, setShow] = useState<any | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedTicketType, setSelectedTicketType] = useState<string>("");
  const [ticketCount, setTicketCount] = useState<number>(1);
  const { toast } = useToast();
  
  useEffect(() => {
    // In a real app, this would be an API call
    const foundShow = shows.find(s => s.id === Number(id));
    if (foundShow) {
      setShow(foundShow);
      // Set default values
      const dateRange = foundShow.date.split(" - ");
      setSelectedDate(dateRange[0]);
      setSelectedTime(foundShow.times[0]);
      setSelectedTicketType(foundShow.ticketTypes[0].name);
    }
  }, [id]);
  
  if (!show) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p className="text-xl">Loading show details...</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  const selectedTicketTypeObj = show.ticketTypes.find(
    (t: { name: string }) => t.name === selectedTicketType
  );
  const totalPrice = selectedTicketTypeObj ? selectedTicketTypeObj.price * ticketCount : 0;
  
  const handleBookNow = () => {
    toast({
      title: "Tickets Added to Cart",
      description: `${ticketCount} ${selectedTicketType} tickets for ${show.title} on ${selectedDate} at ${selectedTime}`,
      variant: "default",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="relative h-[60vh]">
          <div className="absolute inset-0">
            <img 
              src={show.image} 
              alt={show.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
          </div>
          
          <div className="container mx-auto px-4 relative h-full flex items-end pb-12">
            <div className="text-white">
              <Badge className="mb-4 bg-theatre-gold text-theatre-navy">{show.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{show.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{show.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{show.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{show.location}</span>
                </div>
                <div className="flex items-center">
                  <Info className="h-4 w-4 mr-1" />
                  <span>{show.ageRating}</span>
                </div>
                <div className="flex items-center bg-theatre-navy px-2 py-1 rounded">
                  <Star className="h-4 w-4 mr-1 fill-theatre-gold stroke-theatre-gold" />
                  <span>{show.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-theatre-cream py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <h2 className="text-2xl font-bold mb-4 font-playfair">About the Show</h2>
                  <p className="text-gray-700 mb-6">{show.longDescription}</p>
                  
                  <h3 className="text-xl font-bold mb-3 font-playfair">Cast</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {show.cast.map((castMember: { name: string; role: string }, index: number) => (
                      <div key={index} className="flex items-center">
                        <div className="bg-theatre-navy text-white rounded-full w-10 h-10 flex items-center justify-center mr-3">
                          <User className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="font-semibold">{castMember.name}</p>
                          <p className="text-sm text-gray-600">as {castMember.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 font-playfair">Reviews</h3>
                  {show.reviews.map((review: { author: string; quote: string; rating: number }, index: number) => (
                    <div key={index} className="mb-4 last:mb-0">
                      <div className="flex items-center mb-1">
                        <p className="font-semibold mr-2">{review.author}</p>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < review.rating ? "text-theatre-gold fill-theatre-gold" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="italic text-gray-600">"{review.quote}"</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <Card className="sticky top-4">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 font-playfair">Book Tickets</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Select Date</label>
                        <Select value={selectedDate} onValueChange={setSelectedDate}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select date" />
                          </SelectTrigger>
                          <SelectContent>
                            {show.date.split(" - ")[0] && (
                              <SelectItem value={show.date.split(" - ")[0]}>
                                {show.date.split(" - ")[0]}
                              </SelectItem>
                            )}
                            <SelectItem value="Apr 16, 2025">Apr 16, 2025</SelectItem>
                            <SelectItem value="Apr 17, 2025">Apr 17, 2025</SelectItem>
                            <SelectItem value="Apr 18, 2025">Apr 18, 2025</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Select Time</label>
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {show.times.map((time: string, index: number) => (
                              <SelectItem key={index} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Ticket Type</label>
                        <Select value={selectedTicketType} onValueChange={setSelectedTicketType}>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select ticket type" />
                          </SelectTrigger>
                          <SelectContent>
                            {show.ticketTypes.map((type: { name: string; price: number }, index: number) => (
                              <SelectItem key={index} value={type.name}>
                                {type.name} - ${type.price}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-1">Number of Tickets</label>
                        <div className="flex items-center border rounded-md">
                          <button
                            type="button"
                            className="px-3 py-2 text-gray-600 hover:text-theatre-maroon disabled:text-gray-300"
                            disabled={ticketCount <= 1}
                            onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="flex-grow text-center">{ticketCount}</span>
                          <button
                            type="button"
                            className="px-3 py-2 text-gray-600 hover:text-theatre-maroon disabled:text-gray-300"
                            disabled={ticketCount >= 10}
                            onClick={() => setTicketCount(Math.min(10, ticketCount + 1))}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      <Separator className="my-4" />
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span>Ticket Price:</span>
                          <span>${selectedTicketTypeObj?.price} each</span>
                        </div>
                        {ticketCount > 1 && (
                          <div className="flex justify-between">
                            <span>Quantity:</span>
                            <span>x {ticketCount}</span>
                          </div>
                        )}
                        <div className="flex justify-between font-bold text-lg">
                          <span>Total:</span>
                          <span>${totalPrice}</span>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-theatre-maroon hover:bg-theatre-gold hover:text-theatre-navy"
                        onClick={handleBookNow}
                      >
                        Book Now
                      </Button>
                      
                      <p className="text-xs text-gray-500 text-center mt-2">
                        Regular visitors get special discounts. <Link to="/special-offers" className="text-theatre-maroon hover:underline">Learn more</Link>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShowDetailPage;
