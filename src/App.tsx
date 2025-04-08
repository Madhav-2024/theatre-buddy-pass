
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ShowsPage from "./pages/ShowsPage";
import ShowDetailPage from "./pages/ShowDetailPage";
import SpecialOffersPage from "./pages/SpecialOffersPage";
import AccountPage from "./pages/AccountPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import { supabase } from "./hooks/useSupabaseAuth";

const queryClient = new QueryClient();

const App = () => {
  // Add state to track Supabase authentication
  const [supabaseInitialized, setSupabaseInitialized] = useState(false);

  // Check for Supabase session on app load
  useEffect(() => {
    const checkSession = async () => {
      await supabase.auth.getSession();
      setSupabaseInitialized(true);
    };
    
    checkSession();
    
    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, _session) => {
        // We'll let the useSupabaseAuth hook handle the detailed logic
        console.log("Auth state changed");
      }
    );
    
    return () => subscription?.unsubscribe();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shows" element={<ShowsPage />} />
            <Route path="/show/:id" element={<ShowDetailPage />} />
            <Route path="/special-offers" element={<SpecialOffersPage />} />
            <Route path="/my-account" element={<AccountPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
