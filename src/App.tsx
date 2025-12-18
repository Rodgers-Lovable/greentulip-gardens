import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Experiences from "./pages/Experiences";
import Gallery from "./pages/Gallery";
import BookNow from "./pages/BookNow";
import Location from "./pages/Location";
import FAQs from "./pages/FAQs";
import Packages from "./pages/Packages";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Weddings from "./pages/experiences/Weddings";
import Picnics from "./pages/experiences/Picnics";
import Accommodation from "./pages/experiences/Accommodation";
import TeamBuilding from "./pages/experiences/TeamBuilding";
import Photoshoots from "./pages/experiences/Photoshoots";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/experiences/weddings" element={<Weddings />} />
          <Route path="/experiences/picnics" element={<Picnics />} />
          <Route path="/experiences/accommodation" element={<Accommodation />} />
          <Route path="/experiences/team-building" element={<TeamBuilding />} />
          <Route path="/experiences/photoshoots" element={<Photoshoots />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/book" element={<BookNow />} />
          <Route path="/location" element={<Location />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;