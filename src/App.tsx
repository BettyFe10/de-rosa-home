import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CategoriaPage from "./pages/CategoriaPage";
import ServizioPage from "./pages/ServizioPage";
import ImpreseEdili from "./pages/ImpreseEdili";
import Showroom from "./pages/Showroom";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categoria/:categoria" element={<CategoriaPage />} />
          <Route path="/categoria/:categoria/:sottocategoria" element={<CategoriaPage />} />
          <Route path="/servizi/:servizio" element={<ServizioPage />} />
          <Route path="/imprese-edili" element={<ImpreseEdili />} />
          <Route path="/showroom" element={<Showroom />} />
          <Route path="/contatti" element={<Contatti />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
