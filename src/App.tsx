import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import OlympiadLayout from "./components/ai-olympiad/OlympiadLayout";
import Dashboard from "./pages/ai-olympiad/Dashboard";
import Syllabus from "./pages/ai-olympiad/Syllabus";
import Practice from "./pages/ai-olympiad/Practice";
import Battle from "./pages/ai-olympiad/Battle";
import Leaderboard from "./pages/ai-olympiad/Leaderboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.MODE === "production" ? "/nextgenbharat" : ""}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ai-olympiad" element={<OlympiadLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="syllabus" element={<Syllabus />} />
            <Route path="practice" element={<Practice />} />
            <Route path="battle" element={<Battle />} />
            <Route path="leaderboard" element={<Leaderboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
