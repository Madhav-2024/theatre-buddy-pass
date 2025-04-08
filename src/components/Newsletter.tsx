
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = React.useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You will now receive updates about new shows and special offers.",
        variant: "default",
      });
      setEmail("");
    } else {
      toast({
        title: "Email required",
        description: "Please enter your email address.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-12 bg-theatre-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 border border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-theatre-gold opacity-10 rounded-full -mt-10 -mr-10"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-theatre-maroon opacity-10 rounded-full -mb-10 -ml-10"></div>
          
          <div className="text-center mb-6 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-theatre-navy font-playfair">Stay Updated With TheatreBuddy</h2>
            <p className="text-gray-600">
              Subscribe to our newsletter for exclusive offers, new show announcements, and theatre news.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 relative z-10">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button type="submit" className="bg-theatre-maroon hover:bg-theatre-gold hover:text-theatre-navy transition-colors whitespace-nowrap">
              Subscribe Now
            </Button>
          </form>
          
          <p className="text-xs text-gray-500 mt-4 text-center relative z-10">
            By subscribing, you agree to receive marketing emails from TheatreBuddy. 
            You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
