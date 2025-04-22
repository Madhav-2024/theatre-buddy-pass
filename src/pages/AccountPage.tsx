import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Calendar, Ticket, MapPin, User } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { useSupabaseAuth } from "@/hooks/useSupabaseAuth";
import ProfileOverview from "@/components/account/ProfileOverview";
import LoyaltyProgramStatus from "@/components/account/LoyaltyProgramStatus";

const mockBookingData = {
  upcomingShows: [
    {
      id: 2,
      title: "The Phantom of the Opera",
      date: "May 5, 2025",
      time: "7:00 PM",
      location: "Majestic Theatre",
      ticketType: "Premium",
      seats: ["B12", "B13"],
      image: "https://images.unsplash.com/photo-1495345679725-2322fdced5bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ],
  pastShows: [
    {
      id: 1,
      title: "Hamlet",
      date: "March 15, 2025",
      time: "2:00 PM",
      location: "Grand Theatre",
      ticketType: "Standard",
      seats: ["C5"],
      image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "The Lion King",
      date: "February 20, 2025",
      time: "8:00 PM",
      location: "Minskoff Theatre",
      ticketType: "VIP",
      seats: ["A8", "A9"],
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
    }
  ]
};

const AccountPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [activeTab, setActiveTab] = useState("overview");
  const { toast } = useToast();
  
  const { user, loading, error, register, login, logout, checkSession } = useSupabaseAuth();

  useEffect(() => {
    checkSession();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email && password) {
      const success = await login(email, password);
      
      if (success) {
        toast({
          title: "Login Successful",
          description: "Welcome back to TheatreBuddy!",
          variant: "default",
        });
      } else {
        toast({
          title: "Login Failed",
          description: error || "Invalid email or password.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Login Failed",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (name && registerEmail && registerPassword) {
      const success = await register(name, registerEmail, registerPassword);
      
      if (success) {
        toast({
          title: "Registration Successful",
          description: "Welcome to TheatreBuddy! Your account has been created.",
          variant: "default",
        });
      } else {
        toast({
          title: "Registration Failed",
          description: error || "Could not create your account. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Registration Failed",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    const success = await logout();
    
    if (success) {
      setEmail("");
      setPassword("");
      setName("");
      setRegisterEmail("");
      setRegisterPassword("");
      
      toast({
        title: "Logged Out",
        description: "You have been successfully logged out.",
        variant: "default",
      });
    } else {
      toast({
        title: "Logout Failed",
        description: error || "Could not log out. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow bg-theatre-cream py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold mb-6 text-center font-playfair">My Account</h1>
              
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                
                <TabsContent value="login">
                  {loading ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-theatre-maroon"></div>
                    </div>
                  ) : (
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input 
                          id="email" 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="password" className="text-sm font-medium">Password</label>
                        <Input 
                          id="password" 
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter your password"
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-theatre-maroon hover:bg-theatre-gold hover:text-theatre-navy"
                        disabled={loading}
                      >
                        {loading ? 'Logging In...' : 'Log In'}
                      </Button>
                      
                      <p className="text-sm text-center text-gray-500 mt-4">
                        <a href="#" className="text-theatre-navy hover:underline">Forgot password?</a>
                      </p>
                    </form>
                  )}
                </TabsContent>
                
                <TabsContent value="register">
                  {loading ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-theatre-maroon"></div>
                    </div>
                  ) : (
                    <form onSubmit={handleRegister} className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                        <Input 
                          id="name" 
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your full name"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="register-email" className="text-sm font-medium">Email</label>
                        <Input 
                          id="register-email" 
                          type="email"
                          value={registerEmail}
                          onChange={(e) => setRegisterEmail(e.target.value)}
                          placeholder="Enter your email"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="register-password" className="text-sm font-medium">Password</label>
                        <Input 
                          id="register-password" 
                          type="password"
                          value={registerPassword}
                          onChange={(e) => setRegisterPassword(e.target.value)}
                          placeholder="Create a password"
                          minLength={6}
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-theatre-maroon hover:bg-theatre-gold hover:text-theatre-navy"
                        disabled={loading}
                      >
                        {loading ? 'Creating Account...' : 'Create Account'}
                      </Button>
                      
                      <p className="text-xs text-center text-gray-500 mt-4">
                        By creating an account, you agree to our Terms of Service and Privacy Policy.
                      </p>
                    </form>
                  )}
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium mb-4">Benefits of Creating an Account:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-theatre-gold mr-2 shrink-0 mt-0.5" />
                    <span>Join our loyalty program for exclusive discounts</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-theatre-gold mr-2 shrink-0 mt-0.5" />
                    <span>Track your booking history</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-theatre-gold mr-2 shrink-0 mt-0.5" />
                    <span>Faster checkout with saved preferences</span>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-theatre-gold mr-2 shrink-0 mt-0.5" />
                    <span>Receive personalized show recommendations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-theatre-navy py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">My Account</h1>
              <p className="text-gray-300">Welcome back, {user.full_name}</p>
            </div>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-theatre-navy mt-4 md:mt-0" onClick={handleLogout}>
              Log Out
            </Button>
          </div>
        </div>
      </div>
      
      <main className="flex-grow bg-theatre-cream py-12 px-4">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming Shows</TabsTrigger>
              <TabsTrigger value="past">Past Shows</TabsTrigger>
              <TabsTrigger value="settings">Account Settings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <ProfileOverview user={user} />
                </div>
                
                <div className="lg:col-span-2">
                  <LoyaltyProgramStatus user={user} />
                  
                  <Card className="mt-6">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <h2 className="text-xl font-bold">Upcoming Shows</h2>
                        {mockBookingData.upcomingShows.length > 0 && (
                          <Link to="/upcoming">
                            <Button variant="link" className="text-theatre-maroon p-0">View All</Button>
                          </Link>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent>
                      {mockBookingData.upcomingShows.length > 0 ? (
                        mockBookingData.upcomingShows.map((show, index) => (
                          <div key={index} className="flex items-start space-x-4 mb-4 last:mb-0">
                            <div className="relative flex-shrink-0 w-24 h-24 overflow-hidden rounded">
                              <img 
                                src={show.image} 
                                alt={show.title}
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-bold">{show.title}</h3>
                              <div className="flex flex-col space-y-1 text-sm text-gray-500 mt-1">
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  <span>{show.date} at {show.time}</span>
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1" />
                                  <span>{show.location}</span>
                                </div>
                                <div className="flex items-center">
                                  <Ticket className="h-4 w-4 mr-1" />
                                  <span>{show.ticketType} - Seats: {show.seats.join(', ')}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-gray-500 mb-4">You have no upcoming shows</p>
                          <Button className="bg-theatre-maroon hover:bg-theatre-gold hover:text-theatre-navy">
                            <Link to="/shows">Browse Shows</Link>
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="upcoming">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">Upcoming Shows</h2>
                </CardHeader>
                <CardContent>
                  {mockBookingData.upcomingShows.length > 0 ? (
                    mockBookingData.upcomingShows.map((show, index) => (
                      <div key={index} className="mb-6 pb-6 last:mb-0 last:pb-0 border-b last:border-0">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          <div className="relative flex-shrink-0 w-full md:w-48 h-48 overflow-hidden rounded">
                            <img 
                              src={show.image} 
                              alt={show.title}
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold mb-2">{show.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="mb-3">
                                  <div className="text-sm text-gray-500 mb-1">Date & Time</div>
                                  <div className="flex items-center">
                                    <Calendar className="h-5 w-5 mr-2 text-theatre-navy" />
                                    <span>{show.date} at {show.time}</span>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <div className="text-sm text-gray-500 mb-1">Location</div>
                                  <div className="flex items-center">
                                    <MapPin className="h-5 w-5 mr-2 text-theatre-navy" />
                                    <span>{show.location}</span>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="mb-3">
                                  <div className="text-sm text-gray-500 mb-1">Ticket Type</div>
                                  <div className="flex items-center">
                                    <Ticket className="h-5 w-5 mr-2 text-theatre-navy" />
                                    <span>{show.ticketType}</span>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-sm text-gray-500 mb-1">Seats</div>
                                  <div className="flex items-center">
                                    <User className="h-5 w-5 mr-2 text-theatre-navy" />
                                    <span>{show.seats.join(', ')}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-3">
                              <Button variant="outline" className="border-theatre-navy text-theatre-navy hover:bg-theatre-navy hover:text-white">
                                View Ticket Details
                              </Button>
                              <Button variant="outline" className="border-theatre-maroon text-theatre-maroon hover:bg-theatre-maroon hover:text-white">
                                Add to Calendar
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500 mb-4">You have no upcoming shows</p>
                      <Button className="bg-theatre-maroon hover:bg-theatre-gold hover:text-theatre-navy">
                        <Link to="/shows">Browse Shows</Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="past">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">Past Shows</h2>
                </CardHeader>
                <CardContent>
                  {mockBookingData.pastShows.length > 0 ? (
                    mockBookingData.pastShows.map((show, index) => (
                      <div key={index} className="mb-6 pb-6 last:mb-0 last:pb-0 border-b last:border-0">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          <div className="relative flex-shrink-0 w-full md:w-48 h-48 overflow-hidden rounded">
                            <img 
                              src={show.image} 
                              alt={show.title}
                              className="w-full h-full object-cover" 
                            />
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold mb-2">{show.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div>
                                <div className="mb-3">
                                  <div className="text-sm text-gray-500 mb-1">Date & Time</div>
                                  <div className="flex items-center">
                                    <Calendar className="h-5 w-5 mr-2 text-theatre-navy" />
                                    <span>{show.date} at {show.time}</span>
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <div className="text-sm text-gray-500 mb-1">Location</div>
                                  <div className="flex items-center">
                                    <MapPin className="h-5 w-5 mr-2 text-theatre-navy" />
                                    <span>{show.location}</span>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="mb-3">
                                  <div className="text-sm text-gray-500 mb-1">Ticket Type</div>
                                  <div className="flex items-center">
                                    <Ticket className="h-5 w-5 mr-2 text-theatre-navy" />
                                    <span>{show.ticketType}</span>
                                  </div>
                                </div>
                                <div>
                                  <div className="text-sm text-gray-500 mb-1">Seats</div>
                                  <div className="flex items-center">
                                    <User className="h-5 w-5 mr-2 text-theatre-navy" />
                                    <span>{show.seats.join(', ')}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-3">
                              <Button variant="outline" className="border-theatre-navy text-theatre-navy hover:bg-theatre-navy hover:text-white">
                                View Details
                              </Button>
                              <Button className="bg-theatre-maroon hover:bg-theatre-gold hover:text-theatre-navy">
                                Book Again
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-10">
                      <p className="text-gray-500">You haven't attended any shows yet</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <h2 className="text-2xl font-bold">Account Settings</h2>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                        <Input 
                          id="name" 
                          type="text"
                          value={user.full_name}
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                        <Input 
                          id="email" 
                          type="email"
                          value={user.email}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="current-password" className="text-sm font-medium">Current Password</label>
                      <Input 
                        id="current-password" 
                        type="password"
                        placeholder="Enter your current password"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="new-password" className="text-sm font-medium">New Password</label>
                        <Input 
                          id="new-password" 
                          type="password"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="confirm-password" className="text-sm font-medium">Confirm New Password</label>
                        <Input 
                          id="confirm-password" 
                          type="password"
                          placeholder="Confirm new password"
                        />
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Notification Preferences</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <label htmlFor="email-notifications" className="text-sm font-medium">Email Notifications</label>
                            <p className="text-xs text-gray-500">Receive updates about your bookings and account</p>
                          </div>
                          <input 
                            type="checkbox" 
                            id="email-notifications" 
                            className="h-5 w-5 rounded border-gray-300 text-theatre-maroon focus:ring-theatre-maroon"
                            defaultChecked 
                          />
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <label htmlFor="marketing-emails" className="text-sm font-medium">Marketing Emails</label>
                            <p className="text-xs text-gray-500">Receive information about new shows and special offers</p>
                          </div>
                          <input 
                            type="checkbox" 
                            id="marketing-emails" 
                            className="h-5 w-5 rounded border-gray-300 text-theatre-maroon focus:ring-theatre-maroon"
                            defaultChecked 
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-end space-x-4">
                      <Button type="button" variant="outline">Cancel</Button>
                      <Button 
                        type="submit" 
                        className="bg-theatre-maroon hover:bg-theatre-gold hover:text-theatre-navy"
                        onClick={(e) => {
                          e.preventDefault();
                          toast({
                            title: "Settings Saved",
                            description: "Your account settings have been updated.",
                            variant: "default",
                          });
                        }}
                      >
                        Save Changes
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AccountPage;
