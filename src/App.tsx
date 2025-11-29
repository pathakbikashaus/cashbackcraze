import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import Coupons from "./pages/Coupons";
import Deals from "./pages/Deals";
import Referrals from "./pages/Referrals";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { supabase } from './integrations/supabase/client'; // Correctly import the supabase client instance

const queryClient = new QueryClient();
// const supabase = createClient(); // This line is no longer needed as supabase is imported directly

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/referrals" element={<Referrals />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;